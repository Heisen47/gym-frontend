import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/payments`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

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

  const calculateUserPayments = (payments) => {
    const userPayments = {};

    payments.forEach((payment) => {
      const { user, paymentAmount, paymentDate, paymentMethod, validity } = payment;
      const { id, name } = user;
      if (!userPayments[id]) {
        userPayments[id] = { 
          name: name, 
          totalAmount: 0, 
          paymentDate: paymentDate, 
          paymentMethod: paymentMethod, 
          validity: validity 
        };
      }
      userPayments[id].totalAmount += parseFloat(paymentAmount);
    });

    return userPayments;
  };

  const userPayments = calculateUserPayments(payments);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">User Payments Summary</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"><CircularProgress /></div>
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">User Name</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Payment Date</th>
                <th className="py-2 px-4 border-b border-gray-200 text-right">Total Payment (Rs.)</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Payment Method</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Validity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(userPayments).map(([id, { name, totalAmount, paymentDate, paymentMethod, validity }]) => (
                <tr key={id}>
                  <td className="py-2 px-4 border-b border-gray-200">{name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{new Date(paymentDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-right">{totalAmount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{paymentMethod}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{new Date(validity).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Payment;