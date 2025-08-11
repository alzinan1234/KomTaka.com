// ProductCard.js

"use client";
import { useState, useEffect } from 'react';
import { Star, Heart, Eye, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCart } from '../Cart/CartContext';
import allProducts from '@/data/AllProductsData';
import Link from 'next/link';

// 1. Import the new product data


// 2. Dynamically generate categories from the imported data
const uniqueCategories = ['All', ...new Set(allProducts.map(p => p.category))];

const ProductCard = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProducts(allProducts);
        } else {
            const lowerCaseFilter = activeFilter.toLowerCase();
            const filtered = allProducts.filter(product =>
                product.category.toLowerCase() === lowerCaseFilter
            );
            setFilteredProducts(filtered);
        }
    }, [activeFilter]);

    return (
        <div className="maxWidth mx-auto px-4 py-8 max-w-7xl font-sans">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">FASHION TREND, STYLE</p>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">WE SELL HAPPINESS AND DELIVER SMILES.</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 items-center mb-8 space-y-4 md:space-y-0">
                <div className="flex flex-wrap justify-center items-center gap-2">
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`
                                px-6 py-2 rounded-lg font-semibold transition-all duration-300
                                ${activeFilter === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-[#F5F5F5] text-gray-700 hover:bg-gray-100'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={() => setActiveFilter('All')} 
                    className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-black text-white  hover:bg-gray-700 transition-colors duration-300"
                >
                    <span>VIEW ALL</span>
                    <ArrowRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start justify-center">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group relative flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        <div className="relative overflow-hidden">
                            {/* 4. Removed 'NEW' badge as 'isNew' property doesn't exist in new data */}
                            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-red-500">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-blue-500">
                                    <Eye size={20} />
                                </button>
                            </div>
                            {/* 3. Handle both 'images' array and single 'image' property */}
                            <img
                                src={product.images ? product.images[0] : product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-t-md"
                                onError={(e) => {
                                    e.target.src = "https://placehold.co/400x300/e5e7eb/374151?text=Image+Not+Found";
                                }}
                            />
                            
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 
                                    translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                    transition-all duration-300 ease-in-out rounded-b-md"
                            >
                                <span>Add To Cart</span>
                            </button>
                        </div>
                        
                        <div className="p-4 flex flex-col items-center flex-grow">
                           <Link href={`/product/${product.id}`}> <h3 className="text-lg font-semibold text-center text-gray-800 mb-1 truncate w-full">{product.name}</h3></Link>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-blue-600 font-bold">৳{product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                     <span className="text-gray-400 line-through">৳{product.originalPrice.toFixed(2)}</span>
                                )}
                            </div>
                            <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                        stroke={i < Math.floor(product.rating) ? 'currentColor' : 'lightgray'}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;