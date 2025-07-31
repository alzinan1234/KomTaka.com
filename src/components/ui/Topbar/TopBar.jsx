// components/TopBar.jsx
import React from "react";

// You might need to install lucide-react for icons: npm install lucide-react
import { ChevronDown, User } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between text-sm">
      {/* Left Section: Contact Information */}
      <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
        <div className="flex items-center">
          {/* Phone Icon (using a simple text placeholder, replace with a proper icon if needed) */}
          <span className="mr-1">📞</span>
          <span>+1 (234) 567-890</span>
        </div>
        <div className="flex items-center">
          {/* Email Icon (using a simple text placeholder, replace with a proper icon if needed) */}
          <span className="mr-1">✉️</span>
          <span>contact@example.com</span>
        </div>
      </div>

      {/* Right Section: Navigation and User */}
      <div className="flex items-center space-x-4">
        {/* Language Selection */}
        <div className="flex items-center cursor-pointer group">
          <span className="text-yellow-500 font-semibold">BANGLA</span>
          <ChevronDown className="w-4 h-4 ml-1 text-yellow-500 group-hover:rotate-180 transition-transform duration-200" />
        </div>

        {/* Separator */}
        <span className="hidden md:block text-gray-600">|</span>

        {/* Sign In Link */}
        <a
          href="/signin"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          SIGN IN
        </a>

        {/* Separator */}
        <span className="hidden md:block text-gray-600">|</span>

        {/* Sign Up Link */}
        <a
          href="/signup"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          SIGN UP
        </a>

        {/* Separator */}
        <span className="hidden md:block text-gray-600">|</span>

        {/* User Icon */}
        <div className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-200">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
