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
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-1/4 right-4 min-w-96 min-h-52 bg-[#758694] shadow-md p-6 rounded-lg">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide into view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col"
      >
        <div className="text-[#C7B7A3] text-sm mb-2 text-center">
          Quote of the Day
        </div>
        <div className="text-[#C7C8CC] font-semibold mb-4 text-center text-xl mt-2">
          "{currentQuote}"
        </div>
        <div className="text-center mt-5">
          <button className="text-[#493628]">
            {currentAuthor}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OutlineCard;
