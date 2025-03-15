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
    userCounts: []
  });

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

  const processMonthlyData = (customers) => {
    const monthlyUsers = new Array(12).fill(0); 
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    customers.forEach(customer => {
      if (customer.active) {
        const createdAt = dayjs(customer.createdAt);
        const month = createdAt.month();
        monthlyUsers[month]++;
      }
    });

    return {
      months: monthNames,
      userCounts: monthlyUsers
    };
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
          axiosInstance.get("/admin/customers")
        ]);

        // Process payments data
        const paymentsResult = paymentsResponse.data;
        setData(paymentsResult);

        const filtered = paymentsResult.filter((item) => {
          const validityDate = dayjs(item.validity);
          const currentDate = dayjs();
          return validityDate.diff(currentDate, "day") <= 10;
        });
        setFilteredData(filtered);

        // Process customers data for line chart
        const customersResult = customersResponse.data;
        const monthlyStats = processMonthlyData(customersResult);
        setMonthlyData(monthlyStats);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pieChartData = useMemo(
    () => [
      {
        data: data.map((item) => ({
          id: item.id,
          value: item.value,
          label: item.label,
        })),
      },
    ],
    [data]
  );

  const calculateYAxisMax = (userCounts) => {
    const maxCount = Math.max(...userCounts);
    // Round up to nearest 10 for better readability
    return Math.ceil(maxCount / 10) * 10;
  };

  return (
    <>
      <div className>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>
          <div className="flex space-x-5">
            <Button variant="contained" onClick={handleUserModalOpen}>
              Create User
            </Button>
            <Button variant="contained" color="success" onClick={handleAdminModalOpen}>
              Create Admin
            </Button>
          </div>
        </div>

        <div className="flex space-x-5 justify-center items-center border border-black">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
            <PieChart series={pieChartData} width={400} height={200} />
            <LineChart
              xAxis={[{ 
                data: monthlyData.months,
                scaleType: 'band',
              }]}
              yAxis={[{
                min: 0,
                max: calculateYAxisMax(monthlyData.userCounts),
                tickCount: 10
              }]}
              series={[
                {
                  data: monthlyData.userCounts,
                  area: true,
                  color: '#2196f3',
                  label: 'Active Users',
                  showMark: true
                },
              ]}
              width={500}
              height={300}
              margin={{ left: 70, right: 70, top: 20, bottom: 30  }}
              tooltip={{ 
                trigger: 'axis' ,
                formatter: (params) => `${params[0].axisValueLabel}: ${params[0].value} users`
               }}
            />
          </>
          )}

          
        </div>
        <div className="flex items-center mb-4 justify-end">
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