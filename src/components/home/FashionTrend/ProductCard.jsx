
"use client";
import { useState, useEffect } from 'react';
import { Star, Heart, Eye, ShoppingCart, ArrowRight } from 'lucide-react';

// --- Folder Structure Explanation ---
// In a Next.js project, a good structure would be:
//
// /components
//   /ProductCard.jsx         <- A reusable component for a single product card
//   /CategoryFilters.jsx     <- A component for the filter buttons
//   ProductGrid.jsx          <- This main component
//
// /data
//   products.json            <- A file to store your fake data
//
// /pages
//   index.jsx                <- The page where you render the ProductGrid component

// Fake data for products, categorized and with various attributes.
const allProducts = [
  {
    id: 1,
    category: 'gadget',
    name: 'CANON EOS DSLR Camera',
    price: 360,
    originalPrice: 400,
    rating: 4.6,
    reviews: 95,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 2,
    category: 'top selling',
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    originalPrice: 1000,
    rating: 4.8,
    reviews: 325,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 3,
    category: 'fashion',
    name: 'Quilted Satin Jacket',
    price: 660,
    originalPrice: 750,
    rating: 4.7,
    reviews: 55,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 4,
    category: 'accessories',
    name: 'Curology Product Set',
    price: 500,
    originalPrice: 600,
    rating: 4.9,
    reviews: 145,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 5,
    category: 'gadget',
    name: 'GPII Shooter USB Gamepad',
    price: 660,
    originalPrice: 750,
    rating: 4.5,
    reviews: 58,
    image: "/image/Car.png",
    isNew: true,
  },
  {
    id: 6,
    category: 'trending item',
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    originalPrice: 1300,
    rating: 4.6,
    reviews: 35,
    image: "/image/Car.png",
    isNew: true,
  },
  {
    id: 7,
    category: 'fashion',
    name: 'Kids Electric Car',
    price: 960,
    originalPrice: 1100,
    rating: 4.8,
    reviews: 65,
    image: "/image/Car.png",
    isNew: true,
  },
  {
    id: 8,
    category: 'top selling',
    name: 'Breed Dry Dog Food',
    price: 100,
    originalPrice: 120,
    rating: 4.7,
    reviews: 35,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 9,
    category: 'gadget',
    name: 'Wireless Bluetooth Headset',
    price: 450,
    originalPrice: 500,
    rating: 4.5,
    reviews: 80,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 10,
    category: 'accessories',
    name: 'Smart Watch Series 7',
    price: 250,
    originalPrice: 300,
    rating: 4.9,
    reviews: 150,
    image: "/image/Car.png",
    isNew: true,
  },
  {
    id: 11,
    category: 'trending item',
    name: 'Vintage Leather Bag',
    price: 800,
    originalPrice: 950,
    rating: 4.7,
    reviews: 60,
    image: "/image/Car.png",
    isNew: false,
  },
  {
    id: 12,
    category: 'fashion',
    name: 'Designer Sunglasses',
    price: 120,
    originalPrice: 150,
    rating: 4.6,
    reviews: 45,
    image: "/image/Car.png",
    isNew: true,
  },
];

// List of all categories for the filter buttons.
const categories = ['All', 'Top Selling', 'Trending Item', 'Gadget', 'Fashion', 'Accessories'];

const ProductCard = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // This useEffect hook handles the filtering logic.
  // It runs whenever the activeFilter state changes.
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
      {/* Header section with text */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">FASHION TREND, STYLE</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">WE SELL HAPPINESS AND DELIVER SMILES.</h1>
      </div>

      {/* Filter buttons and View All button */}
      <div className="flex flex-col md:flex-row justify-center gap-4  items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 rounded-lg font-semibold transition-all duration-300
                ${activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="flex items-center space-x-2 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
          <span>VIEW ALL</span>
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative flex-none md:w-64 p-4 mr-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            {/* Product Image Section */}
            <div className="relative overflow-hidden">
              {product.isNew && (
                <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full z-10">
                  NEW
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
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
                onError={(e) => {
                  e.target.src = "https://placehold.co/400x300/e5e7eb/374151?text=Image+Not+Found";
                }}
              />
              
              {/* Add to Cart button that appears on hover */}
              <button
                className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 
                  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                  transition-all duration-300 ease-in-out rounded-b-md"
              >
                
                <span>Add To Cart</span>
              </button>
            </div>
            
            {/* Product Details */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-blue-600 font-bold">৳{product.price}</span>
                <span className="text-gray-400 line-through">৳{product.originalPrice}</span>
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
