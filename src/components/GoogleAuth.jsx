import React from "react";
import Card from "@mui/material/Card";
import { Google } from "@mui/icons-material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const handleSuccess = (cred) => {
    console.log("login success",cred) ;
  };

  const handleError = () => {};

  return (
    <div className="cursor-pointer">
      <Card variant="outlined">
        <Google sx={{ fontSize: 70 }} />
        <GoogleOAuthProvider clientId="799455265041-4e660qpe66qgv6ru8pm449v1vp92un3m.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </GoogleOAuthProvider>
      </Card>
    </div>
  );
};

export default GoogleAuth;
