import React from "react";
import OutlineCard from "./OutlineCard";
import hero from "../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="">
        <img src={hero} alt=""className="w-full h-auto" />
      </div>
      <div className="absolute top-1/2 right-4 transform "> 
        <OutlineCard />
      </div>
    </div>
  );
};

export default Hero;
