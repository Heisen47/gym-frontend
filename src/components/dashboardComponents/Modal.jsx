import React, { useState } from 'react';
import { Button, Modal, Box, TextField, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CustomModal = ({ open, handleClose, handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membership: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = formData.email ? '' : 'Email is required';
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid';
    tempErrors.membership = formData.membership ? '' : 'Membership is required';
    tempErrors.phoneNumber = formData.phoneNumber ? '' : 'phoneNumber number is required';
    tempErrors.phoneNumber = /^[0-9]{10}$/.test(formData.phoneNumber) ? '' : 'phoneNumber number is not valid';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:8080/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to create customer");
        }

        const data = await response.json();
        console.log("Customer created successfully:", data);

        if (handleFormSubmit) {
          handleFormSubmit(data);
          alert("Customer created successfully");
        }

        handleClose();
      } catch (error) {
        console.error("Error creating customer:", error);
      }
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <h2 id="keep-mounted-modal-title" className="text-2xl font-bold mb-4">Create New Customer</h2>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            className="mb-4"
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            className="mb-4"
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" className="mb-4" error={!!errors.membership} margin="normal">
            <InputLabel>Membership</InputLabel>
            <Select
              label="Membership"
              name="membership"
              value={formData.membership}
              onChange={handleChange}
            >
              <MenuItem value="true">Active</MenuItem>
              <MenuItem value="false">Inactive</MenuItem>
            </Select>
            {errors.membership && <FormHelperText>{errors.membership}</FormHelperText>}
          </FormControl>
          <TextField
            label="phone Number"
            variant="outlined"
            fullWidth
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            className="mb-4"
            margin="normal"
          />
          {/* <TextField
            label="phone Number"
            variant="outlined"
            fullWidth
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            className="mb-4"
            margin="normal"
          /> */}
          <div className="flex justify-end space-x-4">
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CustomModal;
