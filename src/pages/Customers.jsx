import { TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";
import rows from "../components/dashboardComponents/data/customerData";

const Customers = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const names = rows.map((row) => row.name);

  // Filter rows based on selected value
  const filteredRows = selectedValue
    ? rows.filter((row) => row.name === selectedValue)
    : rows;

  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-5">
        {/* Search Bar */}
        <div className="w-full max-w-md mx-auto mb-5">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            options={names}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                fullWidth
                label="Customers"
                sx={{
                  backgroundColor: "#f3f4f6", // Soft gray for better readability
                  borderRadius: "8px",
                }}
              />
            )}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            onChange={(event, newValue) => {
              setSelectedValue(newValue);
            }}
          />
        </div>

        {/* User Table */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <CustomerTable rows={filteredRows} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
