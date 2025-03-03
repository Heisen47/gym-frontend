import React, { useState, useMemo, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Button, CircularProgress } from "@mui/material";
import CustomModal from "./Modal";
import { LineChart } from "@mui/x-charts/LineChart";
import DashboardTable from "./DashboardTable";
import axios from "axios";
import dayjs from "dayjs";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/addUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const newData = await response.json();
      setData((prevData) => [...prevData, newData]);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/payments`);
        const result = response.data;
        setData(result);

        const filtered = result.filter((item) => {
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

  return (
    <>
      <div className>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>
          <Button variant="contained" onClick={handleOpen}>
            Create User
          </Button>
        </div>

        <div className="flex space-x-5 justify-center items-center border border-black">
          {loading ? (
            <CircularProgress />
          ) : (
            <PieChart series={pieChartData} width={400} height={200} />
          )}

          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
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
        open={open}
        handleClose={handleClose}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Dashboard;
