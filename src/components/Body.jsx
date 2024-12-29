import React from "react";
import AutoScrollCarousel from "./AutoScrollCarousel";
import RecipeReviewCard from "./Offering";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="bg-secondary border border-black shadow-md">
          <h1 className="text-[#C7C8CC] text-3xl p-2 font-sans">
            What we offer
          </h1>
          <div className="flex p-2 gap-3 justify-between">
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="bg-secondary border border-black shadow-md">
          <h3 className="text-[#C7C8CC] text-3xl p-2 font-sans">
            Success Stories
          </h3>
          <div>
            <AutoScrollCarousel />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="bg-secondary border border-black shadow-md">
          <h1 className="font-extrabold p-2 border border-black">Reviews</h1>
          <div className="flex p-2 gap-3 justify-between">
            <AutoScrollCarousel />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Body;
