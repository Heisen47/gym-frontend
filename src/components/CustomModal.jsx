// ModalComponent.js
import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

import Card from "@mui/material/Card";
import { Facebook, Google, Phone } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export const CustomModal = ({
  trigger,
  title = "Modal Title",
  // description = "Modal description",
  children,
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
        className="rounded-lg"
      >
<<<<<<< HEAD
        <Box sx={style} className="flex flex-col items-center">
          <Typography id="modal-title" variant="h6" component="h2">
            Sign In
=======
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" className="text-center">
            {title}
>>>>>>> d411c3db2a6da6b81324ed773aacfb271a844643
          </Typography>
          {/* <Typography id="modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography> */}
<<<<<<< HEAD
          <Typography id="modal-description" className="lg:flex sm:justify-between sm:mt-2">
            <Card variant="outlined">card</Card>
            <Card variant="outlined">card</Card>
            <Card variant="outlined">card</Card>
=======
         

          <Typography id="modal-description" className="flex justify-between mt-2">
            <Card variant="outlined">
              <Google sx={{ fontSize: 40 }}/>
            </Card>
            <Card variant="outlined">
              <Facebook sx={{ fontSize: 40 }}/>
            </Card>
            <Card variant="outlined">
              <Phone sx={{ fontSize: 40 }}/>
            </Card>
>>>>>>> d411c3db2a6da6b81324ed773aacfb271a844643
          </Typography>

          {children}

          <Button onClick={handleClose} variant="contained" className="text-center">
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
