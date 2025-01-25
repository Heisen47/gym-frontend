import React, { useState } from "react";
import AutoScrollCarousel from "./AutoScrollCarousel";
import RecipeReviewCard from "./Offering";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    <RecipeReviewCard key={0}/>,
    <RecipeReviewCard key={1}/>,
    <RecipeReviewCard key={2}/>,
    <RecipeReviewCard key={3}/>,
  ];

  const handlePrevious = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentIndex(prev => 
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentIndex(prev => 
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="p-4">
      {/* What we offer */}




    {/* Success Stories */}

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="bg-secondary mt-5 border-4 border-gray-500 p-2 rounded-lg shadow-2xl overflow-visible">
          <h3 className="text-[#C7C8CC] text-3xl p-2 font-sans">
            Success Stories
          </h3>
          <div>
            <AutoScrollCarousel />
          </div>
        </div>
      </motion.div>


      {/* Gym Reviews */}

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="bg-secondary mt-5 border-4 border-gray-500 p-2 rounded-md shadow-2xl overflow-visible">
          <h1 className="text-[#C7C8CC] text-3xl p-2 font-sans">Reviews</h1>
          <div className="flex p-2 gap-3 justify-between">
            <AutoScrollCarousel />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Body;
