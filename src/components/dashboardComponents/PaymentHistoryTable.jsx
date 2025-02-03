import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function PaymentHistoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Amount(Rs.)</TableCell>
            <TableCell align="right">Payment Date</TableCell>
            <TableCell align="right">Payment method</TableCell>
            <TableCell align="right">Validity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow

              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                100
              </TableCell>
              <TableCell align="right">200</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">88</TableCell>

            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
