import React from "react";
import { Phone } from "@mui/icons-material";
import Card from "@mui/material/Card";

const phoneAuth = () => {
  return (
    <div>
      <Card variant="outlined">
        <Phone sx={{ fontSize: 40 }} />
      </Card>
    </div>
  );
};

export default phoneAuth;
