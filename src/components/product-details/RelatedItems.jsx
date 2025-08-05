// components/product-details/RelatedItems.jsx
"use client";
import { useState, useRef, useEffect } from 'react';
 // Reuse your ProductCard
import allProducts from '@/data/AllProductsData';
import ProductCard from '../Shop/ProductCard';
 // Use the same product data

const RelatedItems = ({ currentProductId }) => {
    // Filter out the current product from related items
    const relatedProducts = allProducts.filter(p => p.id !== currentProductId);

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = relatedProducts.length;
    const autoplayIntervalRef = useRef(null);

    // Adjust cardWidth based on your ProductCard's actual width
    const cardWidth = 280; // Approximate width of ProductCard + margin

    useEffect(() => {
        autoplayIntervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000); // Auto-scroll every 3 seconds
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

    const transformValue = -currentSlide * cardWidth;

    if (relatedProducts.length === 0) {
        return null; // Don't render if no related products
    }

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Related Item</h2>
            <div
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${transformValue}px)` }}
                >
                    {relatedProducts.map((product) => (
                        <div key={product.id} className="flex-none w-72 pr-6"> {/* Adjust width and padding */}
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200"
                >
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-200"
                >
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

export default RelatedItems;