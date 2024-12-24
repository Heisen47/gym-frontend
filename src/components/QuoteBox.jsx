import React from "react";
import OutlinedCard from "../assets/Card/Card";
import { Card } from "@mui/material";

const QuoteBox = () => {
  const motiQuote = {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  };

  return (
    <div className="flex justify-end items-center h-screen p-4">
      <Card variant="outlined">
        <OutlinedCard quote={motiQuote.quote} author={motiQuote.author} />
      </Card>
    </div>
  );
};

export default QuoteBox;
