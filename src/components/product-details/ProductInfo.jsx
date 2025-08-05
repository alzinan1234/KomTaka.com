// components/product-details/ProductInfo.jsx
"use client";
import { Star } from 'lucide-react';
import { useState } from 'react';

import toast from 'react-hot-toast';
import { useCart } from '../home/Cart/CartContext';

const ProductInfo = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
    const [selectedSize, setSelectedSize] = useState(product.availableSizes ? product.availableSizes[0] : null);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity, selectedColor, selectedSize });
        toast.success(`${product.name} (x${quantity}) added to cart!`);
    };

    const ratingStars = [...Array(5)].map((_, i) => (
        <Star
            key={i}
            size={16}
            fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
            stroke={i < Math.floor(product.rating) ? 'currentColor' : 'lightgray'}
            strokeWidth={1.5}
            className="text-yellow-400"
        />
    ));

    return (
        <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-2">
                    {ratingStars}
                </div>
                <span className="text-gray-500 text-sm">({product.reviews} Reviews)</span>
                <span className="mx-4 text-gray-300">|</span>
                <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-4">
                ৳{product.price.toFixed(2)}
                {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through ml-2 text-xl">৳{product.originalPrice.toFixed(2)}</span>
                )}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Colours:</h4>
                    <div className="flex space-x-2">
                        {product.colors.map(color => (
                            <button
                                key={color}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'ring-2 ring-blue-500' : 'border-gray-300'}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                onClick={() => setSelectedColor(color)}
                                aria-label={`Select color ${color}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Size:</h4>
                    <div className="flex space-x-2">
                        {product.availableSizes.map(size => (
                            <button
                                key={size}
                                className={`px-4 py-2 border rounded-md font-medium ${selectedSize === size ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                    <button
                        onClick={() => setQuantity(prev => prev + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="flex-1 max-w-xs bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                    Buy Now
                </button>
            </div>

            <div className="border border-gray-200 rounded-md p-4 mb-6">
                <div className="flex items-center mb-2">
                    <img src="https://placehold.co/24x24/e5e7eb/374151?text=🚚" alt="Free Delivery Icon" className="mr-2" />
                    <div>
                        <h5 className="font-semibold text-gray-800">Free Delivery</h5>
                        <p className="text-sm text-gray-500">Enter your postal code for Delivery availability</p>
                    </div>
                </div>
                <hr className="my-2 border-gray-200" />
                <div className="flex items-center">
                    <img src="https://placehold.co/24x24/e5e7eb/374151?text=🔄" alt="Return Delivery Icon" className="mr-2" />
                    <div>
                        <h5 className="font-semibold text-gray-800">Return Delivery</h5>
                        <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;