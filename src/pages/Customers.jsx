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
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-800">
      <div className="w-full max-w-4xl bg-gray-700 rounded-lg shadow-lg p-5">
        <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Customer Management</h2>
        <Autocomplete
          options={names}
          value={selectedValue}
          onChange={(event, newValue) => setSelectedValue(newValue)}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Customer"
              variant="outlined"
              fullWidth
              className="bg-white rounded"
            />
          )}
          className="mb-4"
        />
        <CustomerTable rows={filteredRows} />
      </div>
    </div>
  );
};

export default Customers;