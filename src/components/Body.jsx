import React from "react";

import Card from "@mui/material/Card";
import AutoScrollCarousel from "./AutoScrollCarousel";


const Body = () => {


  return (
    <div className="p-4">
      <div className="offerings bg-secondary border border-black">
        <h1 className="text-white text-3xl p-2 font-sans">What we offer</h1>
        <AutoScrollCarousel />
      </div>

      <h3 className="font-extrabold p-2 border border-black">
        Success Stories
      </h3>
      <div className="flex items-center gap-4">
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            repellat. Nostrum vel pariatur veniam possimus doloribus qui ducimus
            necessitatibus eius ut magnam, alias, quaerat expedita aperiam, sunt
            adipisci totam sequi?
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            repellat. Nostrum vel pariatur veniam possimus doloribus qui ducimus
            necessitatibus eius ut magnam, alias, quaerat expedita aperiam, sunt
            adipisci totam sequi?
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            repellat. Nostrum vel pariatur veniam possimus doloribus qui ducimus
            necessitatibus eius ut magnam, alias, quaerat expedita aperiam, sunt
            adipisci totam sequi?
          </p>
        </div>
      </div>

      <div className="review">
        <h1 className="font-extrabold p-2 border border-black">Reviews</h1>
        <div className="flex p-2 gap-3 justify-between">
          <Card variant="outlined">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            alias reiciendis voluptatibus sunt inventore vel dolores ducimus
            voluptas nisi beatae doloremque consequuntur fugiat possimus minima
            in necessitatibus corrupti itaque deleniti.
          </Card>
          <Card variant="outlined">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            alias reiciendis voluptatibus sunt inventore vel dolores ducimus
            voluptas nisi beatae doloremque consequuntur fugiat possimus minima
            in necessitatibus corrupti itaque deleniti.
          </Card>
          <Card variant="outlined">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            alias reiciendis voluptatibus sunt inventore vel dolores ducimus
            voluptas nisi beatae doloremque consequuntur fugiat possimus minima
            in necessitatibus corrupti itaque deleniti.
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Body;
