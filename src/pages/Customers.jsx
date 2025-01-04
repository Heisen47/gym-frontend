import { TextField } from "@mui/material";
import React from "react";

const Customers = () => {
  return (
    <div className="fixed pt-5 left-1/2 transform -translate-x-1/2 md:w-[500px] sm:w-auto">
      {/* search bar */}
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </div>
  );
};

export default Customers;
