import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axiosInstance from "../../Auth/axiosInstance";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CustomModal = ({ open, handleClose, handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    membership: "",
    phoneNumber: "",
    dateOfJoining: "",
  });
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    if (date) {
      const currentTime = dayjs().tz("Asia/Kolkata").format("HH:mm:ss"); 
      setFormData((prev) => ({
        ...prev,
        dateOfJoining: date.tz("Asia/Kolkata").format(`YYYY-MM-DD[T]${currentTime}[Z]`),
      }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = formData.email ? "" : "Email is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.membership = formData.membership ? "" : "Membership is required";
    tempErrors.phoneNumber = formData.phoneNumber
      ? ""
      : "phoneNumber number is required";
    tempErrors.phoneNumber = /^[0-9]{10}$/.test(formData.phoneNumber)
      ? ""
      : "phoneNumber number is not valid";

    if (image && image.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2 MB");
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("membership", formData.membership);
      payload.append("phoneNumber", formData.phoneNumber);
      payload.append("dateOfJoining", formData.dateOfJoining);
      if (image) {
        payload.append("image", image);
      }

      try {
        const response = await axiosInstance.post(
          `/admin/addUser`,
          payload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );


        if (handleFormSubmit) {
          handleFormSubmit(response.data);
          alert("Customer created successfully");
        }

        handleClose();
      } catch (error) {
        console.error("Error creating customer:", error);
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
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
          <FormControl
            fullWidth
            variant="outlined"
            className="mb-4"
            error={!!errors.membership}
            margin="normal"
          >
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
            {errors.membership && (
              <FormHelperText>{errors.membership}</FormHelperText>
            )}
          </FormControl>
          <TextField
            label="Phone Number"
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

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Joining"
              value={formData.dateOfJoining ? dayjs(formData.dateOfJoining) : null}
              name="dateOfJoining"
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: "normal",
                },
              }}
              sx={{ width: "100%", marginBottom: "16px" }}
            />
          </LocalizationProvider>

          <TextField
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            id="image-upload"
            className="mb-4"
          />
          <p className="xs italic text-red-500">
            Image should be of max size 2MB
          </p>

          <div className="flex justify-end space-x-4 p-2">
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
