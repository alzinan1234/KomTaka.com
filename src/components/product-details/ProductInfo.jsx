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
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_1_4752)">
    <path d="M11.6663 31.6667C13.5073 31.6667 14.9997 30.1743 14.9997 28.3333C14.9997 26.4924 13.5073 25 11.6663 25C9.82539 25 8.33301 26.4924 8.33301 28.3333C8.33301 30.1743 9.82539 31.6667 11.6663 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.33301 28.334H6.99967C5.8951 28.334 4.99967 27.4386 4.99967 26.334V21.6673M3.33301 8.33398H19.6663C20.7709 8.33398 21.6663 9.22941 21.6663 10.334V28.334M14.9997 28.334H24.9997M31.6663 28.334H32.9997C34.1042 28.334 34.9997 27.4386 34.9997 26.334V18.334M34.9997 18.334H21.6663M34.9997 18.334L30.5823 10.9717C30.2208 10.3692 29.5698 10.0007 28.8673 10.0007H21.6663" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 11.8184H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.81836 15.4541H8.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 19.0908H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_4752">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    <div>
                        <h5 className="font-semibold text-gray-800">Free Delivery</h5>
                        <p className="text-sm text-gray-500">Enter your postal code for Delivery availability</p>
                    </div>
                </div>
                <hr className="my-2 border-gray-200" />
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_1_4757)">
    <path d="M33.3337 18.3332C32.9261 15.4002 31.5654 12.6826 29.4614 10.599C27.3573 8.51539 24.6266 7.18137 21.6898 6.80242C18.753 6.42348 15.773 7.02064 13.209 8.50191C10.645 9.98319 8.63907 12.2664 7.50033 14.9998M6.66699 8.33317V14.9998H13.3337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66699 21.667C7.07459 24.6 8.43521 27.3176 10.5393 29.4012C12.6433 31.4848 15.3741 32.8188 18.3109 33.1977C21.2477 33.5767 24.2276 32.9795 26.7917 31.4982C29.3557 30.017 31.3616 27.7338 32.5003 25.0003M33.3337 31.667V25.0003H26.667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_4757">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
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