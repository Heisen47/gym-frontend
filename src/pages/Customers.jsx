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
        const response = await axios.get("http://localhost:8080/customers", {
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
    <div>
      <div>
        <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg p-6 absolute   flex flex-col justify-center">
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
