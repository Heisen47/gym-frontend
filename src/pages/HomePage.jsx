import React from "react";
import Hero from "../components/Hero";
import Body from "../components/Body";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="container mx-auto">
        <About />

        <Body />

        <Contact />
      </div>
    </div>
  );
};

export default Home;
