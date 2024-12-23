import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import banner_1 from "../assets/hero/banner_1.jpg";
import banner_2 from "../assets/hero/banner_2.jpg";
import banner_3 from "../assets/hero/banner_3.jpg";

const Caraousel = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      bannerImage: banner_1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      bannerImage: banner_2,
    },
    {
      name: "Random Name #3",
      description: "Another banner here!",
      bannerImage: banner_3,
    },
  ];

  return (
    <Box 
      sx={{
        width: '100%',
        maxWidth: '1200px', // Set a max-width to prevent extreme stretching
        margin: '0 auto',   // Center the carousel
        height: {
          xs: '200px',   // Mobile
          sm: '300px',   // Tablet
          md: '400px',   // Desktop
          lg: '500px',   // Large screens
        },
        overflow: 'hidden',
        position: 'relative', // Ensures proper containment
        '& .MuiPaper-root': {
          height: '100%',
          width: '100%',
          margin: 0,
          boxShadow: 'none', // Remove default paper shadow
        }
      }}
      className="-z-50"
    >
      <Carousel 
        autoPlay 
        interval={2000} 
        animation="slide" 
        indicators={false}
        navButtonsAlwaysVisible={false}
        sx={{ 
          height: '100%', 
          width: '100%',
          '& .carousel-container': {
            height: '100%',
            width: '100%'
          }
        }}
      >
        {items.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              height: '100%', 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={item.bannerImage}
              alt={item.name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Caraousel;