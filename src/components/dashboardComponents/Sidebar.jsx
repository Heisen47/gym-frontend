import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <div
        className={`bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex flex-col items-center mt-10">
          {/* Menu Items */}
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">
              <DashboardIcon />{" "}
            </span>
            {isOpen && <span className="text-lg">Dashboard</span>}
          </div>
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">
              {" "}
              <GroupIcon />{" "}
            </span>
            {isOpen && <span className="text-lg">Customers</span>}
          </div>
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
        </div>
      </div>

      {/* Drawer Toggle Button */}

      <button
        onClick={toggleSidebar}
        className="text-center bg-gray-800 text-white p-2 rounded-md cursor-pointer"
      >
        {!isOpen ? "❮" : "❯"}
      </button>
    </div>
  );
};

export default Sidebar;
