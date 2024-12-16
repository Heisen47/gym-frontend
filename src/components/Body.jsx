import React from "react";
import Card from "@mui/material/Card";

const Body = () => {
  return (
    <>
      <div className="offerings">
        <h1 className="font-extrabold p-2 border border-black">What we offer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          reprehenderit, assumenda perspiciatis et, dolor magnam optio sed
          voluptatem cum, officiis eligendi blanditiis distinctio! Est corporis
          accusantium fuga eum reprehenderit laboriosam enim molestias?
        </p>
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
    </>
  );
};

export default Body;
