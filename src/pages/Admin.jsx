import React from "react";
import Sidebar from "../components/dashboardComponents/Sidebar";
import { Outlet } from "react-router"


const Admin = () => {
  return (
    <div className="flex min-h-full bg-slate-600 ">
      <Sidebar />

      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
