import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomerTable from "../components/dashboardComponents/CustomerTable";
import axios from "axios";

const Customers = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/customers`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const names = rows.map((row) => row.name);

  const filteredRows = selectedValue
    ? rows.filter((row) => row.name === selectedValue)
    : rows;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5 bg-gray-800 text-white">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        {/* Search bar */}
        <div className="w-full sm:w-3/4 lg:w-2/3 mb-6">
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
          />
        </div>

        {/* Table */}
        <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg p-4 overflow-x-auto">
          <CustomerTable rows={filteredRows} />
        </div>
      </div>
    </div>
  );
};

export default Customers;