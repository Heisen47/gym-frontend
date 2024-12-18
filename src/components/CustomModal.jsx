import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

import GoogleAuth from "./GoogleAuth";
import FbAuth from "./FbAuth";
import PhoneAuth from "./PhoneAuth";

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
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            className="text-center m-2 text-2xl"
          >
            {title}
          </Typography>

          <Typography
            id="modal-description"
            className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4"
          >
            <GoogleAuth />
            <FbAuth />
            <PhoneAuth />

          </Typography>

          {children}

          <div className="flex justify-center items-center h-full mt-5">
            <Button
              onClick={handleClose}
              variant="contained"
              className="text-center"
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
