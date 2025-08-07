"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const OrderPlacedPage = () => {
    const router = useRouter();

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-24">
            <div className="">
                {/* Illustration */}
                <div className="mb-8">
                    {/* Using an external image source for the illustration */}
                    <img 
                        src="/image/OBJECTS.png" 
                        alt="Order has been successfully placed" 
                        className="w-full h-auto mx-auto"
                        // Fallback in case the image fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/e2e8f0/64748b?text=Order+Confirmed'; }}
                    />
                </div>

                {/* Main Text */}
                <h1 className="text-3xl w-full md:text-4xl font-bold text-gray-800 mb-3 ">
                    Your order has been successfully placed.
                </h1>

                {/* Sub Text */}
                <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
                    Our support team will contact you shortly to confirm the details and arrange delivery. 
                    You can sit back and relax your happiness is on its way!
                </p>

                {/* Back to Home Button */}
                <button
                    onClick={() => router.push('/')}
                    className="bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderPlacedPage;