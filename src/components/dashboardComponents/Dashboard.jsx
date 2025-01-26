import React, { useState, useMemo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Button } from "@mui/material";
import CustomModal from "./Modal";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>
          <Button variant="contained" onClick={handleOpen}>
            Create User
          </Button>
        </div>

        <h2 className="text-xl font-semibold mb-3">User Activity</h2>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>

      {/* Modal for creating new customer */}
      <CustomModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Dashboard;
