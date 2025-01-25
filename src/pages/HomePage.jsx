import React, { Suspense } from "react";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";

const Body = React.lazy(() => import("../components/Body"));

const Home = () => {
  return (
    <div className="bg-slate-600 ">
      <Hero />

      <div className="container mx-auto pt-2">
        <About />

        <Suspense fallback={<div>Loading...</div>}>
          <Body />
        </Suspense>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
