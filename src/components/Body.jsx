import React from "react";

import Card from "@mui/material/Card";
import AutoScrollCarousel from "./AutoScrollCarousel";
import RecipeReviewCard from "./Offering";

const Body = () => {
  return (
    <div className="p-4">
      <div className="bg-secondary border border-black shadow-md">
        <h1 className="text-[#C7C8CC] text-3xl p-2 font-sans">What we offer</h1>
        <AutoScrollCarousel />
      </div>

      <div className="bg-secondary border border-black shadow-md">
        <h3 className="text-[#C7C8CC] text-3xl p-2 font-sans">
          Success Stories
        </h3>
        <div>
          <AutoScrollCarousel />
        </div>
      </div>

      <div className="bg-secondary border border-black shadow-md">
        <h1 className="font-extrabold p-2 border border-black">Reviews</h1>
        <div className="flex p-2 gap-3 justify-between">
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
        </div>
      </div>
    </div>
  );
};

export default Body;
