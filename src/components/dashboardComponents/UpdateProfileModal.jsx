import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

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

const UpdateProfileModal = ({ open, handleClose, customer }) => {

      const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setImage(file);
        }
      };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="update-profile-modal-title"
      aria-describedby="update-profile-modal-description"
    >
      <Box sx={style}>
        <h2 id="update-profile-modal-title" className="text-2xl font-bold mb-4">
          Update Profile
        </h2>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          defaultValue={customer.name}
          className="mb-4"
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          defaultValue={customer.email}
          className="mb-4"
          margin="normal"
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          defaultValue={customer.phoneNumber}
          className="mb-4"
          margin="normal"
        />

        <TextField
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          id="image-upload"
          className="mb-4"
          margin="normal"
        />

        
        <div className="flex justify-end space-x-4">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default UpdateProfileModal;
