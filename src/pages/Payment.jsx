import { Download } from "@mui/icons-material";
import {Table, CircularProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axiosInstance from "../Auth/axiosInstance";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axiosInstance.get(`/admin/payments`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setPayments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payment data:", error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    if (!date.isValid()) return "Invalid Date";
    return date.format("DD-MMM-YY");
  };

  const calculateUserPayments = (payments) => {
    const userPayments = {};

    payments.forEach((payment) => {
      const { user, paymentAmount, paymentDate, paymentMethod, validity } =
        payment;
      const { id, name } = user;
      if (!userPayments[id]) {
        userPayments[id] = {
          name: name,
          totalAmount: 0,
          paymentDate: paymentDate,
          paymentMethod: paymentMethod,
          validity: validity,
          lastPaidAmount: 0,
        };
      }
      userPayments[id].totalAmount += parseFloat(paymentAmount);
      userPayments[id].lastPaidAmount = parseFloat(paymentAmount);
    });

    return userPayments;
  };

  const userPayments = calculateUserPayments(payments);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      Object.entries(userPayments).map(([id, row]) => ({
        "User Name": row.name,
        "Payment Date": formatDate(row.paymentDate),
        "Total Payment (Rs.)": row.totalAmount.toFixed(2),
        "Last Paid Amount (Rs.)": row.lastPaidAmount.toFixed(2),
        "Last Payment Method": row.paymentMethod,
        "Validity": formatDate(row.validity),
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
    XLSX.writeFile(workbook, "Payments.xlsx");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold font-sans">Payments Summary</h2>
        <Button variant="contained" color="primary" onClick={handleDownload}><Download/> Excel</Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">
            <CircularProgress />
          </div>
        </div>
      ) : (
        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: "darkgray" }}>
              <TableRow>
                <TableCell sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>User Name</TableCell>
                <TableCell sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Payment Date</TableCell>
                <TableCell align="right" sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Total Payment (Rs.)</TableCell>
                <TableCell align="right" sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Last Paid Amount (Rs.)</TableCell>
                <TableCell sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Last Payment Method</TableCell>
                <TableCell sx={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Validity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(userPayments).map(
                ([
                  id,
                  {
                    name,
                    totalAmount,
                    lastPaidAmount,
                    paymentDate,
                    paymentMethod,
                    validity,
                  },
                ]) => (
                  <TableRow key={id} className="hover:bg-gray-50">
                    <TableCell sx={{ fontFamily: "Arial, sans-serif" }}>{name}</TableCell>
                    <TableCell sx={{ fontFamily: "Arial, sans-serif" }}>{formatDate(paymentDate)}</TableCell>
                    <TableCell align="right" sx={{ fontFamily: "Arial, sans-serif" }}>{totalAmount.toFixed(2)}</TableCell>
                    <TableCell align="right" sx={{ fontFamily: "Arial, sans-serif" }}>{lastPaidAmount.toFixed(2)}</TableCell>
                    <TableCell sx={{ fontFamily: "Arial, sans-serif" }}>{paymentMethod}</TableCell>
                    <TableCell sx={{ fontFamily: "Arial, sans-serif" }}>{formatDate(validity)}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Payment;
