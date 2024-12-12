// ModalComponent.js
import React, { useState } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  Button 
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CustomModal = ({ 
  trigger, 
  title = "Modal Title", 
  description = "Modal description",
  children 
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpen })}
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          
          {children}
          
          <Button 
            onClick={handleClose} 
            variant="contained" 
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
