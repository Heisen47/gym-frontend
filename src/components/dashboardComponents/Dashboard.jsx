import React, { useState, useMemo, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Button, CircularProgress } from "@mui/material";
import CustomModal from "./Modal";
import { LineChart } from "@mui/x-charts/LineChart";
import DashboardTable from "./DashboardTable";
import axiosInstance from "../../Auth/axiosInstance";
import dayjs from "dayjs";
import { AdminModal } from "./AdminModal";

const Dashboard = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [monthlyData, setMonthlyData] = useState({
    months: [],
    userCounts: [],
  });

  const [userStats, setUserStats] = useState({
    active: 0,
    inactive: 0,
  });

  const processUserStats = (customers) => {
    return customers.reduce(
      (acc, customer) => {
        if (customer.active) {
          acc.active++;
        } else {
          acc.inactive++;
        }
        return acc;
      },
      { active: 0, inactive: 0 }
    );
  };

  const handleUserModalOpen = () => setUserModalOpen(true);
  const handleUserModalClose = () => setUserModalOpen(false);
  const handleAdminModalOpen = () => setAdminModalOpen(true);
  const handleAdminModalClose = () => setAdminModalOpen(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/addUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, newData]);
      handleUserModalClose();
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleAdminSubmit = async (formData) => {
    try {
      await axiosInstance.post("/admin/register", formData);
      handleAdminModalClose();
    } catch (error) {
      console.error("Error creating admin:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [paymentsResponse, customersResponse] = await Promise.all([
          axiosInstance.get("/admin/payments"),
          axiosInstance.get("/admin/customers"),
        ]);

        const customersResult = customersResponse.data;
        const stats = processUserStats(customersResult);
        setUserStats(stats);

        const paymentsResult = paymentsResponse.data;
        const monthlyStats = processMonthlyPayments(paymentsResult);
        setMonthlyData(monthlyStats);

        const filtered = paymentsResult.filter((item) => {
          const validityDate = dayjs(item.validity);
          const currentDate = dayjs();
          return validityDate.diff(currentDate, "day") <= 10;
        });
        setFilteredData(filtered);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processMonthlyPayments = (payments) => {
    const monthlyPayments = new Array(12).fill(0);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    payments.forEach((payment) => {
      const paymentMonth = dayjs(payment.rowversion).month();
      monthlyPayments[paymentMonth] += Number(payment.paymentAmount);
    });
  
    return {
      months: monthNames,
      paymentAmounts: monthlyPayments,
    };
  };

  const pieChartData = useMemo(
    () => 
      [
        {
          data: [
            {
              id: 0,
              value: userStats.active,
              label: "Active Users",
              color: "#5178d3",
            },
            {
              id: 1,
              value: userStats.inactive,
              label: "Inactive Users",
              color: "#e67971",
            },
          ],
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 20,
            itemMarkWidth: 20,
            itemMarkHeight: 20,
            markGap: 8,
            itemGap: 12,
          },
        }
      ],
    [userStats]
  );

  const calculateYAxisMax = (amounts) => {
    const maxAmount = Math.max(...amounts);
    return Math.ceil(maxAmount / 1000) * 1000;
  };

  const getChartWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? window.innerWidth - 40 : 500;
    }
    return 500;
  };

  return (
    <>
      <div >
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-5 md:mb-0">Dashboard Overview</h1>
          <div className="flex space-x-5">
            <Button variant="contained" onClick={handleUserModalOpen}>
              Create User
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleAdminModalOpen}
            >
              Create Admin
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center border border-black p-4">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <PieChart
                series={pieChartData}
                width={400}
                height={200}
                slotProps={{
                  legend: {
                    direction: "row",
                    position: { vertical: "bottom", horizontal: "middle" },
                    padding: 20,
                    itemMarkWidth: 20,
                    itemMarkHeight: 20,
                    markGap: 8,
                    itemGap: 12,
                  },
                }}
              />
              <LineChart
                xAxis={[
                  {
                    data: monthlyData.months,
                    scaleType: "band",
                  },
                ]}
                yAxis={[
                  {
                    min: 0,
                    max: calculateYAxisMax(monthlyData.paymentAmounts),
                    tickCount: 10,
                  },
                ]}
                series={[
                  {
                    data: monthlyData.paymentAmounts,
                    area: true,
                    showMark: true,
                    color: "#2196f3",
                    label: "Payments",
                  },
                ]}
                width={500}
                height={300}
                margin={{ left: 70, right: 70, top: 20, bottom: 50 }}
                tooltip={{
                  trigger: "axis",
                  formatter: (params) =>
                    `${params[0].axisValueLabel}: ₹${params[0].value.toLocaleString()}`,
                }}
              />
            </>
          )}
        </div>
        <div className="flex items-center mb-4 justify-end mt-5">
          <div className="flex items-center mr-4">
            <span className="h-4 w-4 bg-gray-500 inline-block mr-2"></span>
            <span>10 days</span>
          </div>
          <div className="flex items-center">
            <span className="h-4 w-4 bg-red-500 inline-block mr-2"></span>
            <span>7 days</span>
          </div>
        </div>

        <DashboardTable filteredData={filteredData} />
      </div>

      <CustomModal
        open={userModalOpen}
        handleClose={handleUserModalClose}
        handleFormSubmit={handleFormSubmit}
      />
      <AdminModal
        open={adminModalOpen}
        handleClose={handleAdminModalClose}
        handleAdminSubmit={handleAdminSubmit}
      />
    </>
  );
};

export default Dashboard;