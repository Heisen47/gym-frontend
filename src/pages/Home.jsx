import React from "react";
import Hero from "../components/Hero";
import Body from "../components/Body";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-4">
        <Body />
      </div>
    </div>
  );
};

export default Home;
