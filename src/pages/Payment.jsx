import { CircularProgress } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/payments`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setPayments(response.data);
        setLoading(false);
        console.log(response.data);
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

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Payments Summary</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">
            <CircularProgress />
          </div>
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  User Name
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Payment Date
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-right">
                  Total Payment (Rs.)
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-right">
                  Last Paid Amount (Rs.)
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Payment Method
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Validity
                </th>
              </tr>
            </thead>
            <tbody>
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
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-300">
                      {name}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {formatDate(paymentDate)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-right">
                      {totalAmount.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-right">
                      {lastPaidAmount.toFixed(2)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {paymentMethod}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {formatDate(validity)}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Payment;
