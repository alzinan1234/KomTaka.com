import React from 'react';

// You can place these SVG components in a separate file for better organization
const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);


export default function Footer() {
  return (
    <>
      {/* The main content of your page would go here */}
      {/* <main className="flex-grow"> ... </main> */}

      {/* Footer Component */}
      <footer className="bg-black text-white ">
        <div className="container mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Column 1: Exclusive */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Exclusive</h3>
              <p className="text-lg">Subscribe</p>
              <p className="text-base text-gray-300">Get 10% off your first order</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1">
                  <SendIcon />
                </button>
              </div>
            </div>

            {/* Column 2: Support */}
            <div className="space-y-4 lg:justify-self-center">
              <h3 className="text-2xl font-bold">Support</h3>
              <ul className="space-y-2 text-base text-gray-300">
                <li>Mohakhali Wireless Gate, Dhaka-1215</li>
                <li>korntaka@gmail.com</li>
                <li>+88018-88888-9999</li>
              </ul>
            </div>

            {/* Column 3: Account */}
            <div className="space-y-4 lg:justify-self-center">
              <h3 className="text-2xl font-bold">Account</h3>
              <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:underline text-gray-300">My Account</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Login / Register</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Cart</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Wishlist</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Shop</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Link */}
            <div className="space-y-4 lg:justify-self-center">
              <h3 className="text-2xl font-bold">Quick Link</h3>
              <ul className="space-y-2 text-base">
                <li><a href="#" className="hover:underline text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Terms Of Use</a></li>
                <li><a href="#" className="hover:underline text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:underline text-gray-300">Contact</a></li>
              </ul>
            </div>

            {/* Column 5: Social Links */}
            <div className="space-y-4 lg:justify-self-center">
              <h3 className="text-2xl font-bold">Social</h3>
               <div className="flex items-center space-x-4">
                    <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FacebookIcon />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <TwitterIcon />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <InstagramIcon />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-base text-gray-500">
              &copy; Copyright. Nexgen Innovators 2022. All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
