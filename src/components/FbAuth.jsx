import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Facebook } from "@mui/icons-material";

const FbAuth = () => {


  return (
    <div className="cursor-pointer">
      <Card variant="outlined" >
        <Facebook sx={{ fontSize: 70 }} />
      </Card>
    </div>
  );
};

export default FbAuth;
