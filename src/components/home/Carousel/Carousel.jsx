// components/Carousel.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// You will need to install these packages:
// npm install embla-carousel-react lucide-react

const slides = [
  {
    title: "Lossless Youths",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
  {
    title: "Estrange Bond",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
  {
    title: "The Gate Keeper",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
  {
    title: "Last Trace Of Us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
  {
    title: "Urban Decay",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
  {
    title: "The Migration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "banner-img.jpg",
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(
    (emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    },
    [emblaApi, setSelectedIndex]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, setScrollSnaps]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Embla Carousel Container */}
      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative flex-shrink-0 w-full h-full bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8 text-center text-white">
                <div className="max-w-md">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg text-white mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="bg-white bg-opacity-70 text-black p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="bg-white bg-opacity-70 text-black p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
