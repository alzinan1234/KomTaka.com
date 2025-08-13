"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import Cart from "@/components/home/Cart/Cart";
import { useCart } from "@/components/home/Cart/CartContext";

const Navbar = () => {
  // Removed scroll blur effect for navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  const searchInputRef = useRef(null);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      const timeout = setTimeout(() => {
        searchInputRef.current.focus();
        searchInputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSearchOpen(false);
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  const closeSearch = () => setIsSearchOpen(false);

  return (
  <nav className="sticky top-0 z-50 bg-white px-2 sm:px-4 shadow-sm">
      <div className="maxWidth mx-auto flex items-center justify-between h-16 ">
        {/* Logo */}
        <div className="flex items-center min-w-[120px] md:min-w-[150px]">
          <Link href="/">
            <Image className="w-[120px] md:w-[150px]" src="/logo.png" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <div className="relative w-full max-w-lg text-black">
            <input
              type="text"
              placeholder="Search here for product"
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none  transition-all duration-200"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex flex-wrap space-x-4 md:space-x-6 text-black">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/shop" className="hover:text-blue-500">Shop</Link></li>
            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <Heart className="cursor-pointer" />
            <User className="cursor-pointer" />
            <button onClick={toggleCart} className="relative focus:outline-none" aria-label="Open cart">
              <ShoppingCart className="cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleSearch}>
            <Search className="w-6 h-6 text-black" />
          </button>
          {/* Cart icon hidden on small devices, but sidebar still works on desktop */}
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-200`}
        style={{
          maxHeight: isSearchOpen ? "80px" : "0px",
          // backgroundColor: "#000",
        }}
      >
        <div className="px-4 py-2">
          <div className="relative w-full text-black">
            <input
              ref={searchInputRef}
              id="mobile-search-input"
              type="text"
              placeholder="Search here for product"
              className="w-full h-12 pl-4 pr-16 rounded-full border border-gray-300 focus:outline-none  text-base"
            />
            {/* Search icon */}
            <Search className="absolute right-10 top-1/2 -translate-y-1/2 text-black" />
            {/* Close button */}
            {isSearchOpen && (
              <button
                onClick={closeSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200`}
        style={{ maxHeight: isMenuOpen ? "300px" : "0px" }}
      >
        <ul className="flex flex-col px-4 py-2 space-y-2 text-black">
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
