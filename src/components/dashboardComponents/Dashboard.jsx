import React, { useState, useMemo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomModal from "./Modal";
import { LineChart } from "@mui/x-charts/LineChart";
import { Table } from "lucide-react";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    { id: 0, value: 10, label: "series A" },
    { id: 1, value: 15, label: "series B" },
    { id: 2, value: 20, label: "series C" },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/addUser", {
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

  const pieChartData = useMemo(() => [
    {
      data: data,
    },
  ], [data]);

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>
          <Button variant="contained" onClick={handleOpen}>
            Create User
          </Button>
        </div>

        {/* <h2 className="text-xl font-semibold mb-3">User Activity</h2> */}
        <div className="flex space-x-5 justify-center items-center border border-black">

          <PieChart
            series={pieChartData}
            width={400}
            height={200}
          />

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

          <DashboardTable />

      </div>

      {/* Modal for creating new customer */}
      <CustomModal open={open} handleClose={handleClose} handleFormSubmit={handleFormSubmit}/>
    </>
  );
};

export default Dashboard;
