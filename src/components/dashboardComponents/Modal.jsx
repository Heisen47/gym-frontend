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
import axios from "axios";

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
  });
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/addUser",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Customer created successfully:", response.data);

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
      setPreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
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

          <div className="flex items-center justify-center gap-4">
            <TextField
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-upload"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              className="mt-2 z-30"
            >
              Upload
            </Button>
          </div>

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
