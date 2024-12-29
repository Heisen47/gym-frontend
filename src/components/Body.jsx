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

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="bg-secondary border-4 border-gray-500 p-4 rounded-md shadow-2xl overflow-visible">
        <h1 className="text-[#C7C8CC] text-3xl mb-4 font-sans md:text-left sm:text-center">
          What we offer
        </h1>
        <div className="relative">
          {/* Navigation Buttons - Now positioned absolutely */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-2 w-full z-10 pointer-events-none">
            <button
              onClick={handlePrevious}
              className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transform -translate-x-1/2 pointer-events-auto"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transform translate-x-1/2 pointer-events-auto"
              aria-label="Next card"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Card Container */}
          <div className="flex gap-3 overflow-hidden w-full">
            {/* For Small Screens, Show One Card */}
            <div className="md:hidden w-full">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {cards[currentIndex]}
              </motion.div>
            </div>
            
            {/* For Large Screens, Show All Cards */}
            <div className="hidden md:flex gap-3">
              {cards.map((card, index) => (
                <div key={index} className="flex-shrink-0">
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>


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
