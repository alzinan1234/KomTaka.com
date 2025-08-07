import React from 'react';

// A single component for the stat items to keep the code clean
const StatItem = ({ value, label }) => (
    <div className="text-center px-4">
        <p className="text-4xl lg:text-5xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 mt-2">{label}</p>
    </div>
);

const AboutPage = () => {
    return (
        <div className="bg-white py-8">
            <div className="maxWidth mx-auto   py-2">
                
                {/* Section 1: Our Story Text */}
                <div className=" mx-auto text-center mb-16">
                    <p className="text-base font-semibold text-gray-500 tracking-wider uppercase mb-3">
                        Our story
                    </p>
                    <h1 className="text-2xl md:text-[40px] font-extrabold text-gray-900 mb-6">
                        Komtaka: We Sell Happiness, Not Just Products
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Komtaka.com was born from a heartfelt mission to create more than just an e-commerce platform; it's a destination for joy. In a world of endless transactions, we chose to focus on connections. We wanted to redefine online shopping by offering handpicked products that spark happiness while empowering small businesses and artisans across Bangladesh.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Driven by the belief that commerce should be meaningful, Komtaka combines value, emotion, and purpose. Every product sold is a story of craftsmanship. Every order fulfilled is a promise delivered with care. From fashion to lifestyle, gifts to gadgets — we bring you things that delight, inspire, and make life brighter.
                        At Komtaka, we don't just sell things. We deliver smiles, support local creators, and build a community where happiness is shared.
                    </p>
                </div>

                {/* Section 2: Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] mb-8">
                    {/* Large Image on the left */}
                    <div className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
                        <img 
                            src="/image/aboutImage.png" 
                            alt="A small business owner happily packing clothes" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    {/* Smaller Image Top-Right */}
                    <div className="rounded-lg overflow-hidden">
                        <img 
                            src="/image/aboutImage2.png" 
                            alt="A woman choosing a t-shirt from a rack" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    {/* Smaller Image Bottom-Right */}
                    <div className="rounded-lg overflow-hidden">
                        <img 
                            src="/image/aboutImage3.png" 
                            alt="A stylish woman happily holding several clothing items" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

            </div>

            {/* Section 3: Stats Bar */}
            <div className="bg-black maxWidth mx-auto">
                <div className=" mx-auto grid grid-cols-2 md:grid-cols-5 items-center divide-x divide-gray-700 rounded  ">
                    <div className="col-span-2 md:col-span-1 flex items-center justify-center py-4 md:py-12"><StatItem value="12+" label="Years of Experience" /></div>
                    <div className="flex items-center justify-center py-4 md:py-12"><StatItem value="20+" label="Sellers on Our Platform" /></div>
                    <div className="flex items-center justify-center py-4 md:py-12"><StatItem value="50+" label="Products Available" /></div>
                    <div className="flex items-center justify-center py-4 md:py-12"><StatItem value="19+" label="Charitable Causes Supported" /></div>
                    <div className="flex items-center justify-center py-4 md:py-12"><StatItem value="18+" label="Customer Satisfaction Rate" /></div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;