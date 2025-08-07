"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { KeenSliderPlugin } from "keen-slider/react";

const images = [
  {
    src: "/image/slider-image.png",
    alt: "Brown Coat",
  },
  {
    src: "/image/slider-image.png",
    alt: "Beige Bag",
  },
  {
    src: "/image/slider-image2.png",
    alt: "Black Shoes",
  },
  {
    src: "/image/slider-image2.png",
    alt: "Green Skirt",
  },
];

const autoplay = (slider) => {
  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

const MemoriesSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
  }, [autoplay]);

  return (
    <section className="py-8 px-4">
      <h2 className="text-center text-xl md:text-[40px] font-bold mb-6">
        Some of our memories
      </h2>
      <div ref={sliderRef} className="keen-slider w-full max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="relative bg-zinc-100 rounded-lg overflow-hidden w-full h-64 sm:w-72 sm:h-72 md:w-80 md:h-96 flex items-center justify-center">
              <img
                className="absolute object-cover w-3/4 h-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                src={image.src}
                alt={image.alt}
                onError={e => { e.target.src = 'https://placehold.co/297x297'; }}
              />
              <div className="absolute bottom-4 right-4 p-2  rounded-full shadow-md flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
                  <path d="M20.7047 18.9837C20.5879 19.109 20.4281 19.1881 20.2437 19.1881C19.8872 19.1881 19.5922 18.8717 19.5922 18.4893L19.5922 11.1847L12.7821 11.1847C12.4257 11.1847 12.1306 10.8682 12.1306 10.4858C12.1306 10.1035 12.4257 9.78702 12.7821 9.78702L20.2437 9.78702C20.6002 9.78702 20.8952 10.1035 20.8952 10.4858L20.8952 18.4893C20.8952 18.6871 20.8215 18.8585 20.7047 18.9837Z" fill="black"/>
                  <path d="M20.6001 11.0929L10.256 22.1883C10.004 22.4586 9.58601 22.4586 9.33402 22.1883C9.08202 21.918 9.08202 21.4697 9.33402 21.1994L19.6782 10.104C19.9302 9.83372 20.3481 9.83372 20.6001 10.104C20.8521 10.3743 20.8521 10.8226 20.6001 11.0929Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoriesSlider;
