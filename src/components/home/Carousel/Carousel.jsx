"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const slides = [
  {
    title: "Delicious Food",
    description: "Savor the taste of our exquisite dishes made with love.",
    image: "/image/banner/banner1.jpg", // Ensure this is in /public folder
  },
  {
    title: "Fresh Ingredients",
    description: "Only the freshest ingredients go into our meals.",
    image: "/image/banner/banner2.jpg",
  },
  {
    title: "Cozy Ambiance",
    description: "Enjoy your meal in a warm and welcoming environment.",
    image: "/image/banner/banner3.jpg",
  },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Handle slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden w-full h-[60vh] md:h-[80vh]">
      <div
        className="embla__viewport w-full h-full"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`embla__slide relative flex-shrink-0 w-full h-full transition-opacity duration-1000 ease-in-out transform 
                ${selectedIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}
              `}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 text-center text-white">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg mb-4 md:mb-6">{slide.description}</p>
                  <button className="bg-white text-black text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-300 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-20 px-4 md:px-8">
        <button
          onClick={scrollPrev}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-colors hidden md:block"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-75 transition-colors hidden md:block"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Mobile Navigation Arrows (visible on smaller screens) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-20 px-2 md:hidden">
        <button
          onClick={scrollPrev}
          className="bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition-colors"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition-colors"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default Banner;