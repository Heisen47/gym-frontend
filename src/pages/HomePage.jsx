import React, { Suspense } from "react";
import Hero from "../components/LandingPageComponents/Hero";
import Contact from "./Contact";
import About from "./About";

const Body = React.lazy(() => import("../components/LandingPageComponents/Body"));

const Home = () => {
  return (
    <div className="bg-slate-600 ">
      <Hero />
      <About />
      <div className="container mx-auto pt-2">

        <Suspense fallback={<div>Loading...</div>}>
          <Body />
        </Suspense>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
