import React from 'react';

import { Phone, Mail } from 'lucide-react'; // Using lucide-react for icons

// Main contact page component
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10  font-['Inter'] flex flex-col items-center">
      <div className="w-full maxWidth space-y-8">
        
        {/* Map Section */}
        <div className="w-full rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116836.7909378125!2d90.35412902361026!3d23.78063645479632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b9f3f9f3f9%3A0x3f3f3f3f3f3f3f3f!2sDhaka!5e0!3m2!1sen!2sbd!4v1625078712345!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="rounded-2xl"
          ></iframe>
        </div>
        
        {/* Contact Info & Form Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          
          {/* Left Column - Contact Details */}
          <div className="md:w-1/3 w-full bg-white rounded-2xl p-6 space-y-6 flex-shrink-0">
            
            {/* Call To Us Section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Call To Us</h3>
              </div>
              <p className="font-normal text-black text-[14px] ml-16">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-normal text-black text-[14px] ml-16">
                Phone: +8801811112222
              </p>
            </div>
            
            <hr className="border-gray-200" />
            
            {/* Write To Us Section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 rounded-full">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Write To Us</h3>
              </div>
              <p className="font-normal text-black text-[14px] ml-16">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <div className="ml-16">
                <p className="font-normal text-black text-[14px]">
                  Email: customer@exclusive.com
                </p>
                <p className="font-normal text-black text-[14px]">
                  Email: support@exclusive.com
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="md:w-2/3 w-full bg-white rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-4 bg-gray-50  border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-4 bg-gray-50  border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 bg-gray-50  border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white text-[16px] font-medium py-4 px-8  hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
export default ContactPage;