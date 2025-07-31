// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import { Search, Bell, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ease-in-out">
      <div className="maxWidth mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Using a placeholder for the logo. You should replace this with your actual logo. */}
          <div className=" rounded-full mr-2">
            <img src="/logo.png" alt="" />
          </div>
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <div className="relative w-full max-w-lg text-black">
            <input
              type="text"
              placeholder="Search here for product"
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
          </div>
        </div>

        {/* Desktop Navigation and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-black hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-blue-500 transition-colors duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-blue-500 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer transition-colors duration-200" />
            <Heart className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer transition-colors duration-200" />
            <User className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* Mobile menu button and icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <Search className="w-6 h-6 text-black" />
          <Heart className="w-6 h-6 text-black" />
          <User className="w-6 h-6 text-black" />
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 border-t border-gray-200">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="block text-black hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-blue-500 transition-colors duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-blue-500 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
