// app/shop/page.jsx
"use client";

import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
import allProducts from "@/data/AllProductsData";
import Sidebar from "@/components/shop/Sidebar";
import ProductCard from "@/components/shop/ProductCard";

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8">
        <div className="flex flex-col md:flex-row relative min-h-screen">
          {/* Mobile filter button */}
          <div className="md:hidden flex justify-end p-2 sm:p-4 border-b border-gray-200 sticky top-0 bg-white z-30">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg shadow text-sm sm:text-base"
            >
              <Filter size={18} /> Filters
            </button>
          </div>

          {/* Sidebar - hidden on mobile, drawer toggle */}
          <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${isSidebarOpen ? "backdrop-blur-sm  bg-opacity-30 opacity-100 visible" : "opacity-0 invisible"} md:relative md:opacity-100 md:visible md:bg-transparent`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className={`absolute left-0 top-0 h-full w-11/12 max-w-xs bg-white overflow-y-auto transform transition-transform duration-300 
              md:relative md:translate-x-0 md:w-64 md:border-r md:border-gray-200 
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar setFilteredProducts={setFilteredProducts} />

              {/* Close button only on mobile */}
              <div className="md:hidden absolute top-2 right-4">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-3 py-1 text-sm bg-gray-200 rounded"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1 p-2 sm:p-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 mt-10 text-base sm:text-lg">
                No products found.
              </p>
            ) : (
              <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
