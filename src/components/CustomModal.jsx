import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

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
  children,
  onAuthSuccess,
  setName,
  setDp,
}) => {
  const [open, setOpen] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [admin, setAdmin] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
            className="text-center m-2 font-sans font-semibold text-2xl"
          >
            {title}
          </Typography>

          <div className="text-center">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="user" onClick={() => setAdmin(!admin)}>
                User
              </ToggleButton>
              <ToggleButton value="admin" onClick={() => setAdmin(!admin)}>
                Admin
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          {admin && (
            <Typography
              id="modal-description"
              className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4
            p-2"
            >
              <GoogleAuth
                onAuthSuccess={onAuthSuccess}
                setName={setName}
                setDp={setDp}
              />
              <FbAuth />
              <PhoneAuth />
            </Typography>
          )}

          {!admin && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
              }}
            >
              <FormControl className="text-center">
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </Box>
          )}

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
