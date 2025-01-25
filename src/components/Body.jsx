import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import reviews from "./Data/CustomerReviews";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-2">
      {/* Gym Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col items-center"
      >
        <div className="bg-secondary mt-5 p-8 max-w-7xl">
          <h3 className="text-[#C7C8CC] text-4xl font-bold mb-8">
            Reviews
          </h3>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4" // Added padding to create space between slides
              >
                <div className="flex md:flex-row items-center justify-between p-6 bg-[#758694] rounded-lg shadow-md">
                  {/* Image Section */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.image}
                      alt="Customer"
                      className="w-28 h-28 md:w-40 md:h-40 object-cover border-4 border-gray-200 shadow-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Review Text Section */}
                  <div className="flex flex-col flex-grow text-left">
                    <p className="text-gray-800 text-lg mb-4 italic font-serif mx-4">
                      "{review.message}"
                    </p>

                    <p className="text-end">
                      - <span className="text-sm font-bold text-[#C7B7A3]"> {review.name}</span>
                    </p>

                    <div className="text-gray-600 flex justify-end items-center text-sm space-y-1 gap-2">
                      <p>
                        <span className="text-[#C7B7A3]"> {review.age} </span> <span className="text-xs"> yrs </span>  ,
                      </p>
                      <p>
                        <span className="text-[#C7B7A3]"> {review.height} </span> <span className="text-xs"> cms </span> ,
                      </p>
                      <p>
                        <span className="text-[#C7B7A3]"> {review.weight}  </span> <span className="text-xs"> kgs </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        transform: "scale(1.2)",
        right: "-50px", // Increased the right value to move the arrow further outside
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        transform: "scale(1.2)",
        left: "-50px", // Increased the left value to move the arrow further outside
      }}
      onClick={onClick}
    />
  );
};

export default Body;
