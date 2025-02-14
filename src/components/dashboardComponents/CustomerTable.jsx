import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const CustomerTable = ({ rows }) => {
  const handleRowClick = (id) => {
    window.open(`/user/${id}`, "_blank");
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      rows.map((row) => ({
        "User ID": row.id,
        Name: row.name,
        Email: row.email,
        Membership: row.membership,
        "Phone Number": row.phoneNumber,
        active: row.active,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
    XLSX.writeFile(workbook, "Users.xlsx");
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "darkgray" }}>
            <TableRow>
              <TableCell
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                User Id
              </TableCell>
              <TableCell
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                Email
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                Membership
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
              >
                Phone Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) => row.active === true)
              .map((row, index) => {
                const textColor = index % 2 === 0 ? "inherit" : "gray";
                return (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "white" : "gray.50",
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        cursor: "pointer",
                        color: textColor,
                      }}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        cursor: "pointer",
                        color: textColor,
                      }}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        cursor: "pointer",
                        color: textColor,
                      }}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.membership ? "Active" : "Inactive"}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        cursor: "pointer",
                        color: textColor,
                      }}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        cursor: "pointer",
                        color: textColor,
                      }}
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.phoneNumber}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-center mt-2">
        <Button variant="contained" color="primary" onClick={handleDownload}>
          <Download /> Excel
        </Button>
      </div>
    </>
  );
};

export default CustomerTable;
