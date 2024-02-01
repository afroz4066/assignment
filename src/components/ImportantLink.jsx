import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10">
        <button
          onClick={handlePrevious}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 4.5l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-0 right-0 z-10">
        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <div className="relative w-[500px] p-2 overflow-hidden after:clear-both after:block after:content-['']">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                activeIndex === index ? "block" : "hidden"
              }`}
              data-te-carousel-item
            >
              <img
                src={`https://mdbcdn.b-cdn.net/img/new/slides/04${
                  index + 1
                }.webp`}
                className="block w-full"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
