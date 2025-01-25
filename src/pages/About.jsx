import React from "react";
import { motion } from "framer-motion";
import LaunchIcon from '@mui/icons-material/Launch';

const About = () => {
  return (
    <div
      id="About"
      className="lg:border-4 border-blue-100 rounded-2xl py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          <h1 className="text-4xl font-bold text-[#C7C8CC] sm:text-5xl md:text-6xl mb-10">
            Our Gym
          </h1>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Cardio Zone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#758694] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#C7B7A3] mb-4">
              Cardio Zone <span className="cursor-pointer text-white"><LaunchIcon fontSize="small"/> </span>
            </h3>
            <p className="text-[#C7C8CC]">
              Treadmills, ellipticals, stationary bikes, and more to elevate
              your heart rate and burn calories.
            </p>
          </motion.div>

          {/* Strength Training */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#758694] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#C7B7A3] mb-4">
              Strength Training <span className="cursor-pointer text-white"><LaunchIcon fontSize="small"/> </span>
            </h3>
            <p className="text-[#C7C8CC]">
              Free weights, weight machines, and functional training areas to
              build muscle and increase strength.
            </p>
          </motion.div>

          {/* Group Fitness */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#758694] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#C7B7A3] mb-4">
              Group Fitness Classes <span className="cursor-pointer text-white"><LaunchIcon fontSize="small"/> </span>
            </h3>
            <p className="text-[#C7C8CC]">
              Energizing Zumba, invigorating yoga, challenging spin classes, and
              more to keep you motivated.
            </p>
          </motion.div>
        </div>

        {/* Additional Features */}
        <div className="bg-[#758694] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold  text-gray-900 mb-8 text-center">
            Beyond the Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#C7B7A3] mb-4">
                Clean and Welcoming Atmosphere
              </h3>
              <p className="text-[#C7C8CC]">
                Enjoy a comfortable and hygienic environment where you can focus
                on your workout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#C7B7A3] mb-4">
                Experienced Staff
              </h3>
              <p className="text-[#C7C8CC]">
                Our friendly and knowledgeable staff are always available to
                assist you and answer your questions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div whileHover={{ scale: 1.02 }} className="text-center mt-16">
          <h2 className="text-3xl font-bold text-[#C7B7A3]">
            Ready to transform your fitness journey?
          </h2>
          {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Join Now
          </button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
