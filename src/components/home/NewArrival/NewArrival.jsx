import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
    <div className="maxWidth mx-auto px-4 py-16 font-sans">
      {/* Header section */}
      <div className="mb-8">
        <p className="text-blue-600 font-semibold mb-1">Featured</p>
        <h2 className="text-4xl font-bold text-gray-900">New Arrival</h2>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large featured card for PlayStation 5 */}
        <div className="relative rounded-lg overflow-hidden h-96 lg:h-auto">
          {/* Background image for the large card */}
          <Image
            src="/image/Frame 1.png"
            alt="PlayStation 5"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
          {/* Overlay and text content */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">PlayStation 5</h3>
            <p className="text-gray-300 text-sm mb-4 max-w-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-white border-b-2 border-white w-max font-semibold transition-colors duration-300 hover:text-blue-400 hover:border-blue-400">
              Shop Now
            </button>
          </div>
        </div>

        {/* Smaller cards container */}
        <div className="grid grid-cols-1 gap-6">
          {/* Small card for Women's Collections */}
          <div className="relative rounded-lg overflow-hidden h-96">
            {/* Background image for the small card */}
            <Image
              src="/image/Frame 2.png"
              alt="Women's Collections"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            {/* Overlay and text content */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Women's Collections</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-white border-b-2 border-white w-max font-semibold transition-colors duration-300 hover:text-blue-400 hover:border-blue-400">
                Shop Now
              </button>
            </div>
          </div>

          {/* Two tiny cards at the bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tiny card for Speakers */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <Image
                src="/image/Frame 3.png"
                alt="Speakers"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1">Speakers</h3>
                <p className="text-gray-300 text-xs mb-2">
                  Amazon wireless speakers
                </p>
                <button className="text-white border-b-2 border-white w-max text-sm font-semibold transition-colors duration-300 hover:text-blue-400 hover:border-blue-400">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Tiny card for Perfume */}
            <div className="relative rounded-lg overflow-hidden h-64">
              <Image
                src="/image/Frame 4.png"
                alt="Perfume"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1">Perfume</h3>
                <p className="text-gray-300 text-xs mb-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="text-white border-b-2 border-white w-max text-sm font-semibold transition-colors duration-300 hover:text-blue-400 hover:border-blue-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

