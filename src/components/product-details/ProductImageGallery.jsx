// components/product-details/ProductImageGallery.jsx
"use client";
import { useState } from 'react';

const ProductImageGallery = ({ images }) => {
    const safeImages = Array.isArray(images) && images.length > 0 ? images : ["https://placehold.co/600x600?text=No+Image"];
    const [mainImage, setMainImage] = useState(safeImages[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 ">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full md:w-auto">
                {safeImages.map((img, index) => (
                    <div
                        key={index}
                        className={`w-20 h-20 md:w-24 md:h-24 border rounded-md overflow-hidden cursor-pointer ${mainImage === img ? 'border-blue-600 ring-2 ring-blue-300' : 'border-gray-200'}`}
                        onClick={() => setMainImage(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="flex-1 border border-gray-200 rounded-md overflow-hidden flex items-center justify-center p-2 md:p-4 w-full md:max-w-lg">
                <img 
                    src={mainImage} 
                    alt="Main Product" 
                    className="w-full h-64 md:h-96 object-contain" 
                />
            </div>
        </div>
    );
};

export default ProductImageGallery;