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

const CustomModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membership: '',
    phone: '',
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
    tempErrors.phone = formData.phone ? '' : 'Phone number is required';
    tempErrors.phone = /^[0-9]{10}$/.test(formData.phone) ? '' : 'Phone number is not valid';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      handleClose();
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
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
            {errors.membership && <FormHelperText>{errors.membership}</FormHelperText>}
          </FormControl>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            className="mb-4"
            margin="normal"
          />
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