import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center z-30">

      <div
        className={`bg-gray-500 text-white h-screen flex flex-col justify-center transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex flex-col gap-2">
          {/* Menu Items */}

          {/* Dashboard */}
          <Link to="/admin/dashboard" className="block md:inline font-sans">
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">
              <DashboardIcon />
            </span>
            {isOpen && <span className="text-lg">Dashboard</span>}
          </div>
          </Link>


          {/* Customers */}
          <Link to="/admin/customers" className="block md:inline font-sans">
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">
              
              <GroupIcon />
            </span>
            {isOpen && <span className="text-lg">Customers</span>}
          </div>
          </Link>

          

          {/* Payment */}
          <Link to="/admin/payment" className="block md:inline font-sans">
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">
              <PaymentIcon />
            </span>
            {isOpen && <span className="text-lg">Payment</span>}
          </div>
          </Link>

        </div>
      </div>

      {/* Drawer Toggle Button */}

      <button
        onClick={toggleSidebar}
        className="text-center bg-gray-600 text-white pt-4 pb-4 cursor-pointer rounded-r-lg hover:bg-gray-700"
      >
        {isOpen ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
      </button>
    </div>
  );
};

export default Sidebar;
