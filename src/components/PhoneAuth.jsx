import React from "react";
import { Phone } from "@mui/icons-material";
import Card from "@mui/material/Card";

const phoneAuth = () => {
  return (
    <div  className="cursor-pointer">
      <Card variant="outlined">
        <Phone sx={{ fontSize: 70 }} />
      </Card>
    </div>
  );
};

export default phoneAuth;
