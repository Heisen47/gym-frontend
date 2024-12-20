import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Google } from "@mui/icons-material";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const [success, setSuccess] = useState(false);

  const handleSuccess = (cred) => {
    console.log("login success", cred);
    const jwtTokenDecode = jwtDecode(cred?.credential);
    console.log(jwtTokenDecode);
    setSuccess(true);
  };

  const handleError = () => {
    console.log("Login failed");
  };

  const login = useGoogleLogin({
    onSuccess: () => handleSuccess(),
  });

  return (
    <>

        <div className="cursor-pointer">
          <Card variant="outlined">
            <Google sx={{ fontSize: 70 }} onClick={() => login()} />
            {/* <GoogleLogin onSuccess={handleSuccess} onError={handleError} /> */}
          </Card>
        </div>
    </>
  );
};

export default GoogleAuth;
