import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const UpdatePaymentsModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    amount: "",
    paymentDate: "",
    paymentMethod: "",
    membership: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white", // Ensure visible background
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
          value={formData.amount}
          onChange={handleChange}
          name="amount"
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
