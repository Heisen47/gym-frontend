import React from "react";
import Card from "@mui/material/Card";
import { Facebook } from "@mui/icons-material";

const FbAuth = () => {
  return (
    <div>
      <Card variant="outlined">
        <Facebook sx={{ fontSize: 40 }} />
      </Card>
    </div>
  );
};

export default FbAuth;
