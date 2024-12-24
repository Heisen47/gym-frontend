import React, { useEffect, useState } from "react";
import quotesData from "../assets/quotes/quotes";
import { motion } from "framer-motion";

const OutlineCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-end items-center h-screen p-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Slide into view
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the card is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="bg-white shadow-md p-4 rounded-lg max-w-sm"
      >
        <div className="text-gray-500 text-sm mb-2">Quote of the Day</div>
        <div className="text-gray-800 italic mb-4">
          "{quotesData.quotes[currentIndex].quote}"
        </div>
        <div className="text-right">
          <button className="text-blue-500 hover:underline">
            {quotesData.quotes[currentIndex].author}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OutlineCard;
