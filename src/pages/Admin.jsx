import React from "react";
import Sidebar from "../components/dashboardComponents/Sidebar";
import { Outlet } from "react-router"

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
