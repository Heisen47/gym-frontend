import React from "react";
import Card from "@mui/material/Card";
import { Facebook, Google, Phone } from "@mui/icons-material";

const GoogleAuth = () => {
  return (
    <div>
      <Card variant="outlined">
        <Google sx={{ fontSize: 40 }} />
      </Card>
    </div>
  );
};

export default GoogleAuth;
