import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Dashboard = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white shadow-md rounded-lg p-5">
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
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-3">Recent User Histories</h2>
          <ul className="list-disc pl-5">
            <li>User A signed up</li>
            <li>User B renewed subscription</li>
            <li>User C attended a session</li>
            <li>User D left feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
