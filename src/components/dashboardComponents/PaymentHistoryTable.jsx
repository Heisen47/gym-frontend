import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

export default function PaymentHistoryTable({ payment, loading }) {
  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    if (!date.isValid()) return "Invalid Date";
    return date.format("DD-MMM-YY");
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
        stickyHeader
      >
        <TableHead sx={{ backgroundColor: "darkgray" }}>
          <TableRow>
            <TableCell
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Id
            </TableCell>
            <TableCell
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Amount(Rs.)
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
              Payment method
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Validity (days)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            payment.map((payment, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {payment.paymentId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {payment.paymentAmount}
                </TableCell>
                <TableCell align="right">
                  {formatDate(payment.paymentDate)}
                </TableCell>
                {/* <TableCell align="right">{payment.paymentDate}</TableCell> */}
                <TableCell align="right">
                  {payment.paymentMethod.toUpperCase()}
                </TableCell>
                <TableCell align="right">
                  {formatDate(payment.validity)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
