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
    slidesToShow: 1,
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
      {/* What we offer */}

      {/* Gym Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen to the bottom
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        viewport={{ amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ duration: 0.5 }} // Control animation speed
        className="flex flex-col items-center"
      >
        <div className="bg-secondary mt-5  p-6 rounded-lg overflow-visible w-full max-w-7xl">
          <h3 className="text-[#C7C8CC] text-4xl p-2 font-sans">
            Reviews
          </h3>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-800 text-lg mb-4">{review.message}</p>
                  <p className="text-gray-600">
                    <strong>Name:</strong> {review.name}
                  </p>
                  <p className="text-gray-600">
                    <strong>Age:</strong> {review.age}
                  </p>
                  <p className="text-gray-600">
                    <strong>Height:</strong> {review.height}
                  </p>
                  <p className="text-gray-600">
                    <strong>Weight:</strong> {review.weight}
                  </p>
                  <p className="text-gray-600">
                    <strong>Transformation:</strong> {review.transformation}
                  </p>
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
        height: "50px",
        width: "50px",
        borderRadius: "50%",
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
        height: "50px",
        width: "50px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default Body;
