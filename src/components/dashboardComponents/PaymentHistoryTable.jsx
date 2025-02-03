import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function PaymentHistoryTable({payment , loading}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Amount(Rs.)</TableCell>
            <TableCell align="right">Payment Date</TableCell>
            <TableCell align="right">Payment method</TableCell>
            <TableCell align="right">Validity (days)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {!loading && payment.map((payment, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {payment.paymentAmount}
              </TableCell>
              <TableCell align="right">{payment.paymentDate}</TableCell>
              <TableCell align="right">{payment.paymentMethod}</TableCell>
              <TableCell align="right">{payment.validity}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
