"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Bell, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import Cart from "@/components/home/Cart/Cart";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="maxWidth mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <div className="relative w-full max-w-lg text-black">
            <input
              type="text"
              placeholder="Search here for product"
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-black">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/shop" className="hover:text-blue-500">Shop</Link></li>
            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Heart className="cursor-pointer" />
            <User className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" onClick={toggleCart} />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <Search className="w-6 h-6 text-black" />
          <Heart className="w-6 h-6 text-black" />
          <User className="w-6 h-6 text-black" />
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col px-4 py-2 space-y-2 text-black border-t border-gray-200">
          <li><Link href="/" className="block hover:text-blue-500">Home</Link></li>
          <li><Link href="/shop" className="block hover:text-blue-500">Shop</Link></li>
          <li><Link href="/about" className="block hover:text-blue-500">About Us</Link></li>
          <li><Link href="/contact" className="block hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>

      {/* Cart Sidebar */}
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;
