import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

export default function DashboardTable({ filteredData }) {
  const currentYear = dayjs().year();

  const filteredAndSortedData = filteredData.filter((row) => {
    const validityDate = dayjs(row.validity);
    return validityDate.year() >= currentYear;
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ backgroundColor: "darkgray" }}>
          <TableRow>
            <TableCell
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Payment ID
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Amount
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Payment Date
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Payment Method
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Validity
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAndSortedData.map((row) => {
            const validityDays = dayjs(row.validity).diff(dayjs(), "day");
            let textColor = "inherit";
            if (validityDays <= 7) {
              textColor = "red";
            } else if (validityDays <= 14) {
              textColor = "gray";
            }

            return (
              <TableRow key={row.paymentId}>
                <TableCell>{row.paymentId}</TableCell>
                <TableCell>{row.user.name}</TableCell>
                <TableCell align="right">{row.paymentAmount}</TableCell>
                <TableCell align="right">
                  {dayjs(row.paymentDate).format("DD-MMM-YYYY")}
                </TableCell>
                <TableCell align="right">{row.paymentMethod}</TableCell>
                <TableCell align="right" style={{ color: textColor }}>
                  {dayjs(row.validity).format("DD-MMM-YYYY")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
