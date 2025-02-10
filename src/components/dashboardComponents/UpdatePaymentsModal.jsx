import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


dayjs.extend(utc);
dayjs.extend(timezone);

const UpdatePaymentsModal = ({ open, handleClose, paymentId, onUpdate , userId}) => {

  const [formData, setFormData] = useState({
    paymentId: "",
    amount: "",
    paymentDate: "",
    paymentMethod: "",
    validity: "",
  });

  useEffect(() => {
    if (paymentId) {
      const fetchPaymentData = async () => {
        try {
          const response = await axios.put(`http://localhost:8080/payments/${paymentId}` );
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching payment data:", error);
        }
      };

      fetchPaymentData();
    }
  }, [paymentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const formattedData = {
        paymentId: Number(formData.paymentId), 
        paymentDate: dayjs(formData.paymentDate).tz("Asia/Kolkata").format("YYYY-MM-DDTHH:mm:ss[Z]"),
        paymentAmount: parseFloat(formData.amount).toFixed(2), 
        paymentMethod: formData.paymentMethod,
        validity: dayjs(formData.validity).tz("Asia/Kolkata").format("YYYY-MM-DDTHH:mm:ss[Z]"),
        user: {
          id: Number(userId),
        },
      };

      console.log("Formatted Data:", formattedData);

      const response = await axios.put(`http://localhost:8080/payments/update/${paymentId}`, formattedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Payment updated successfully:", response.data);
      onUpdate();
      handleClose();
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="update-payment-modal-title"
      aria-describedby="update-payment-modal-description"
    >
      <Box sx={style}>
        <h2 id="update-payment-modal-title" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Update Payment
        </h2>
        <TextField
          label="Id"
          variant="outlined"
          fullWidth
          value={formData.paymentId}
          onChange={handleChange}
          name="paymentId"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={formData.amount}
          onChange={handleChange}
          name="amount"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Payment Date"
          type="date"
          variant="outlined"
          fullWidth
          value={formData.paymentDate}
          onChange={handleChange}
          name="paymentDate"
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Validity"
          type="date"
          variant="outlined"
          fullWidth
          value={formData.validity}
          onChange={handleChange}
          name="validity"
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Payment Method</InputLabel>
          <Select
            label="Payment Method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
          </Select>
        </FormControl>
        <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default UpdatePaymentsModal;