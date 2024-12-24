import React, { useEffect, useState } from "react";
import quotesData from "../assets/quotes/quotes";
import { motion } from "framer-motion";

const OutlineCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuote = quotesData[currentIndex].quote || quotesData[0].quote;
  const currentAuthor = quotesData[currentIndex].author || quotesData[0].author;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-2 sm:right-2 w-80 bg-[#758694] shadow-md p-6 rounded-lg">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide into view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="text-gray-500 text-sm mb-2 text-center">
          Quote of the Day
        </div>
        <div className="text-gray-800 italic mb-4 text-center">
          "{currentQuote}"
        </div>
        <div className="text-right">
          <button className="text-blue-500 hover:underline">
            {currentAuthor}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OutlineCard;
