import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Grid,
  Users,
  DollarSign,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col items-center mt-10">
          {/* Menu Items */}
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <Grid className="h-5 w-5" />
            {isOpen && <span className="text-lg">Dashboard</span>}
          </div>
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <Users className="h-5 w-5" />
            {isOpen && <span className="text-lg">Customers</span>}
          </div>
          <div
            className={`flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <DollarSign className="h-5 w-5" />
            {isOpen && <span className="text-lg">Payment</span>}
          </div>
        </div>
      </div>

      {/* Drawer Toggle Button */}
      <div>
        <button
          onClick={!toggleSidebar}
          className="textcenter bg-gray-800 text-white p-2 rounded-md"
        >
          {isOpen ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
