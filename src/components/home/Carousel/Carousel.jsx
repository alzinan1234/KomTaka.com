"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    title: "Delicious Food",
    description: "Savor the taste of our exquisite dishes made with love.",
    image: "/banner-img.jpg", // Ensure this is in /public folder
  },
  {
    title: "Fresh Ingredients",
    description: "Only the freshest ingredients go into our meals.",
    image: "/banner-img.jpg",
  },
  {
    title: "Cozy Ambiance",
    description: "Enjoy your meal in a warm and welcoming environment.",
    image: "/banner-img.jpg",
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

  return (
    <div className="embla relative overflow-hidden w-full h-[80vh]">
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
              <div className="absolute inset-0 bg-opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 text-center text-white">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
