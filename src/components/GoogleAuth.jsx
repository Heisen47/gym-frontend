import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Google } from "@mui/icons-material";
import useGoogleAuth from "../Auth/useGoogleAuth";

const GoogleAuth = () => {
  // const [success, setSuccess] = useState(false);

const login = useGoogleAuth()

  return (
    <>
      <div className="cursor-pointer">
        <Card variant="outlined">
          <Google
            sx={{ fontSize: 70 }}
            onClick={() => login()}
          />
        </Card>
      </div>
    </>
  );
};

export default GoogleAuth;
