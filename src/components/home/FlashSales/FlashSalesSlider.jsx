"use client";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";
import Link from "next/link";
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import allProducts from "@/data/AllProductsData";

// 1. Import the new product data


// 2. Filter for products that are on sale (have a discount)
const flashSaleProducts = allProducts.filter(p => p.discount);

const FlashSalesSlider = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const totalSlides = flashSaleProducts.length;
    const autoplayIntervalRef = useRef(null);

    const startAutoplay = () => {
        autoplayIntervalRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const resetAutoplay = () => {
        clearInterval(autoplayIntervalRef.current);
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        return () => clearInterval(autoplayIntervalRef.current);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const cardWidth = 288; // w-64 (256px) + mr-6 (24px) = 280, adjusted for better spacing
    const transformValue = -currentSlide * cardWidth;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
            <div className="flex items-center justify-between mb-8">
                 <div className="">
        <p className="text-blue-600 font-semibold mb-5">Today’s</p>
        <h2 className=" text-2xl md:text-4xl font-bold text-gray-900">Flash Sales</h2>
      </div>
                <div className="flex space-x-2">
                    <button onClick={prevSlide} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button onClick={nextSlide} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>
            <div
                className="relative overflow-hidden"
                onMouseEnter={() => clearInterval(autoplayIntervalRef.current)}
                onMouseLeave={resetAutoplay}
            >
                <div
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${transformValue}px)` }}
                >
                    {flashSaleProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative flex-none w-64 p-4 mx-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative mb-4 overflow-hidden rounded-md">
                                {product.discount && (
                                    <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full z-10">
                                        -{product.discount}%
                                    </span>
                                )}
                                <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-red-500">
                                        <Heart size={20} />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-blue-500">
                                        <Eye size={20} />
                                    </button>
                                </div>
                                <img
                                    // 3. Handle both 'images' array and single 'image' property
                                    src={product.images ? product.images[0] : product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md"
                                    onError={(e) => {
                                        e.target.src = "https://placehold.co/400x300/e5e7eb/374151?text=Image+Not+Found";
                                    }}
                                />
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-b-md"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div className="text-center">
                                <Link href={`/product/${product.id}`}>
                                    <h3 className="text-lg font-semibold mb-1 truncate text-gray-800 hover:text-blue-600 transition-colors">{product.name}</h3>
                                </Link>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <span className="text-blue-600 font-bold">৳{product.price.toFixed(2)}</span>
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through">৳{product.originalPrice.toFixed(2)}</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-center text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
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
