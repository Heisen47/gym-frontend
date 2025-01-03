import React from "react";
import Sidebar from "../components/dashboardComponents/Sidebar";
import { Outlet } from "react-router"

const Admin = () => {
  return (
    <div>
      <Sidebar />

      <div className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
