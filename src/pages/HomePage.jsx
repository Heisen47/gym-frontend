import React from "react";
import Hero from "../components/Hero";
import Body from "../components/Body";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />

      <About/>
      <div className="container mx-auto p-4">
        <Body />
      </div>

      <Contact/>
    </div>
  );
};

export default Home;
