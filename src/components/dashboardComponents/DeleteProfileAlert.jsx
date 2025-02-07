import React from 'react';
import { Modal, Box, Button } from '@mui/material';

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

const DeleteProfile = ({ open, handleClose, handleDelete }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-profile-modal-title"
      aria-describedby="delete-profile-modal-description"
    >
      <Box sx={style}>
        <h2 id="delete-profile-modal-title" className="text-2xl font-bold mb-4">
          Delete Profile
        </h2>
        <p>Are you sure you want to delete this profile?</p>
        <div className="flex justify-end space-x-4 mt-4">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteProfile;