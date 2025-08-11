// components/shop/ProductCard.jsx
"use client";
import { Heart, Eye, Star } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "../home/Cart/CartContext";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const ratingStars = [...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={16}
      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
      stroke={i < Math.floor(product.rating) ? "currentColor" : "lightgray"}
      strokeWidth={1.5}
      className="text-yellow-400"
    />
  ));

  return (
    <div className="group md:w-70 p-4 mx-2 relative bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
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
            <Link href={`/product/${product.id}`}>
          <button className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-blue-500">
            <Eye size={20} />
          </button>
            </Link>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/400x300/e5e7eb/374151?text=Image+Not+Found";
          }}
        />

        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 rounded-b-md transition-all duration-300 ease-in-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0"
        >
          Add To Cart
        </button>
      </div>

      <div className="p-4 flex flex-col items-center text-center">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate w-full">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-blue-600 font-bold">৳{product.price}</span>
          <span className="text-gray-400 line-through">
            ৳{product.originalPrice}
          </span>
        </div>
        <div className="flex items-center text-yellow-400">
          {ratingStars}
          <span className="ml-2 text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
