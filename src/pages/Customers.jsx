import { TextField } from "@mui/material";
import React from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";

const Customers = () => {
  return (
    <div className="flex-col">
      {/* search bar */}
      <div className="absolute pt-8 rounded-md left-1/2 transform -translate-x-1/2 md:w-[500px] sm:w-auto z-20">
        <TextField fullWidth label="Customers" id="fullWidth" />
      </div>

      {/* User Table */}
      <div className="absolute pt-40 left-1/2 transform -translate-x-1/2 scrollbar-hide">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customers;
