import { TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";
import rows from "../components/dashboardComponents/data/customerData";

const Customers = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const names = rows.map((row) => row.name);

  const filteredRows = selectedValue
    ? rows.filter((row) => row.name === selectedValue)
    : rows;

  return (
    <div>
      <div>
        <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg p-6 absolute flex flex-col justify-center">
          {/* Search bar */}
          <div className="mb-6 w-full">
            <Autocomplete
              options={names}
              value={selectedValue}
              onChange={(event, newValue) => setSelectedValue(newValue)}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) =>
                setInputValue(newInputValue)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Customer"
                  variant="outlined"
                  fullWidth
                  className="bg-white rounded"
                />
              )}
            />
          </div>
              
          {/* Table */}
          <div className=" rounded-lg  p-4  overflow-y-auto">
            <CustomerTable rows={filteredRows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
