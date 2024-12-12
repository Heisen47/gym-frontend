import React from "react";
import Card from "./Card";

const Body = () => {
  return (
    <div>
      <h1 className="font-extrabold p-2 border border-black">Reviews</h1>
      <div className="flex p-2 gap-3 justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Body;
