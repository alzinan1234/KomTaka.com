"use client";

import React from "react";
import "./ScrollingBanner.css";

const texts = [
  "FASHION",
  "GADGET",
  "BEST PRICE",
  "FAST DELLIVERRY",
  "AUTHORIZED PRODUCT",
  "GADGET",
  "FASHION",
  "GADGET",
  "BEST PRICE",
];

const ScrollingBanner = () => {
  const repeatedTexts = [...texts, ...texts]; // double it for infinite effect

  return (
  <div className="scrolling-banner-container pt-5">
      <div className="overflow-hidden bg-yellow-400 w-full border-t border-white">
      <div className="scrolling-text whitespace-nowrap flex items-center animate-scroll py-5">
        {repeatedTexts.map((text, index) => (
          <div key={index} className="flex items-center text-black text-sm md:text-base font-semibold uppercase px-4">
            <span>{text}</span>
            <span className="text-red-500 px-2">•</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ScrollingBanner;
