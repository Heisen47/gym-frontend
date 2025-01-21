import { TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";
import rows from "../components/dashboardComponents/data/customerData";

const Customers = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const names = rows.map((row) => row.name);

  //filter rows based on selected value
  const filteredRows = selectedValue
  ? rows.filter((row) => row.name === selectedValue)
  : rows;

  return (
    <div className="flex-col">
      {/* search bar */}
      <div className="flex justify-center p-5">
        <div className="absolute  p-8 rounded-md left-1/2 transform -translate-x-1/2 md:w-[500px] sm:w-auto z-20">
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
                  backgroundColor: "gray", // Change this to your desired color
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
      </div>

      {/* User Table */}
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-5 scrollbar-hide">
          <CustomerTable rows={filteredRows} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
