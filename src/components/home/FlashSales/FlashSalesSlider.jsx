"use client";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 370,
    originalPrice: 160,
    discount: 40,
    rating: 4.8,
    reviews: 88,
    image: "/image/gaming.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 370,
    originalPrice: 400,
    discount: 35,
    rating: 4.6,
    reviews: 75,
    image: "/image/gaming.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.9,
    reviews: 99,
    image: "/image/gaming.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.7,
    reviews: 96,
    image: "/image/gaming.png",
  },
  {
    id: 5,
    name: "Logitech G502 Mouse",
    price: 450,
    originalPrice: 600,
    discount: 30,
    rating: 4.9,
    reviews: 120,
    image: "/image/gaming.png",
  },
  {
    id: 6,
    name: "HyperX Cloud II Headset",
    price: 550,
    originalPrice: 700,
    discount: 20,
    rating: 4.8,
    reviews: 150,
    image: "/image/gaming.png",
  },
];

const FlashSalesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = products.length;
  const autoplayIntervalRef = useRef(null);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(autoplayIntervalRef.current);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetAutoplay();
  };

  const handleMouseEnter = () => clearInterval(autoplayIntervalRef.current);
  const handleMouseLeave = () => resetAutoplay();

  const resetAutoplay = () => {
    clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  const cardWidth = 270;
  const transformValue = -currentSlide * cardWidth;

  return (
    <div className="maxWidth mx-auto px-4 py-8 max-w-7xl font-sans">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${transformValue}px)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex-none w-64 p-4 mr-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="relative mb-4 overflow-hidden rounded-md">
                <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full z-10">
                  -{product.discount}%
                </span>
                <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-blue-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                
                {/* Animated Add to Cart Button */}
                <button
                  className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 
                  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                  transition-all duration-300 ease-in-out rounded-b-md"
                >
                  Add To Cart
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1 truncate">{product.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-blue-600 font-bold">৳{product.price}</span>
                  <span className="text-gray-400 line-through">৳{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSalesSlider;