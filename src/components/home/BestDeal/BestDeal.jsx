
"use client";
import { useState, useEffect } from 'react';

// Fake data for the banner slides
const slides = [
  {
    id: 1,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    discount: "UP to 80% OFF",
    image: "/image/watch.png",
    background: "bg-[#0b0c26]",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "HEADPHONES & MORE.",
    subtitle: "The latest in audio technology",
    discount: "UP to 60% OFF",
    image: "/image/watch.png",
    background: "bg-[#0b0c26]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "FASHION FOR ALL.",
    subtitle: "Your style, your way",
    discount: "UP to 70% OFF",
    image: "/image/watch.png",
    background: "bg-[#0b0c26]",
    textColor: "text-white",
  },
];

const BestDeal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // Autoplay functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalSlides]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="maxWidth mx-auto px-4 py-8 max-w-7xl font-sans">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
        {/* Slider container */}
        <div className="relative w-full h-[400px] flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-none w-full h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 ${slide.background} ${slide.textColor} transition-colors duration-500`}
            >
              {/* Text content section */}
              <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
                <p className="text-xl md:text-2xl font-normal opacity-80 mb-2">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-medium opacity-80">
                  {slide.discount}
                </p>
              </div>

              {/* Image section */}
              <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
                {/* Use a simple div or SVG for the background shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-blue-500 opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-96 h-96 rounded-full bg-blue-500 opacity-10 transform translate-x-1/4 -translate-y-1/4"></div>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-64 md:w-80 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-70 rounded-full shadow-md text-gray-800 hover:bg-opacity-90 transition-all duration-300 z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-70 rounded-full shadow-md text-gray-800 hover:bg-opacity-90 transition-all duration-300 z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;

