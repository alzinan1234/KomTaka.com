// components/TopBar.jsx
import React from "react";

// You might need to install lucide-react for icons: npm install lucide-react
import { ChevronDown, User } from "lucide-react";

const TopBar = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="maxWidth mx-auto  py-2  flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Left Section: Contact Information */}
          <div className="   flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
            <div className="flex items-center">
              {/* Phone Icon (using a simple text placeholder, replace with a proper icon if needed) */}
              <span className="mr-1">📞</span>
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center">
              {/* Email Icon (using a simple text placeholder, replace with a proper icon if needed) */}
              <span className="mr-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
