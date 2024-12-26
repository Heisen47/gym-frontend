import React, { useEffect, useRef, useState } from "react";
import RecipeReviewCard from "./Offering"; // Assuming RecipeReviewCard is your component
import { ChevronLeft, ChevronRight } from "lucide-react";

const AutoScrollCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Update arrow visibility
    setShowLeftArrow(container.scrollLeft > 0);
    const maxScroll = container.scrollWidth - container.clientWidth;
    setShowRightArrow(container.scrollLeft < maxScroll);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate scroll offset based on container width
    const scrollOffset = container.offsetWidth / 2; 

    container.scrollBy({
      left: direction * scrollOffset, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        setScrollDirection(-1);
      } else if (scrollContainer.scrollLeft <= 0) {
        setScrollDirection(1);
      }

      scrollContainer.scrollLeft += scrollDirection * 2; 
    }, 20);

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <div className="relative w-full">
      {showLeftArrow && (
        <button 
          onClick={() => scroll(-1)} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {showRightArrow && (
        <button 
          onClick={() => scroll(1)} 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-scroll gap-4 px-12" 
        style={{ 
          scrollBehavior: "smooth", 
          msOverflowStyle: "none", 
          scrollbarWidth: "none", 
          WebkitOverflowScrolling: "touch", 
          "&::-webkit-scrollbar": { display: "none" } 
        }}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex-none">
            <RecipeReviewCard /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;