import { TextField } from "@mui/material";
import React from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";

const Customers = () => {
  return (
    <div className="flex-col">
      {/* search bar */}
      <div className="flex justify-center p-5">
        <div className="absolute  p-8 rounded-md left-1/2 transform -translate-x-1/2 md:w-[500px] sm:w-auto z-20">
          <TextField variant="filled" fullWidth label="Customers" id="filled-basic" sx={{
          backgroundColor: 'gray', // Change this to your desired color
        }}/>
        </div>
      </div>

      {/* User Table */}
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-5 scrollbar-hide">
          <CustomerTable />
        </div>
      </div>
    </div>
  );
};

export default Customers;
