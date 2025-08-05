// components/shop/Sidebar.jsx
"use client";
import allProducts from '@/data/AllProductsData';
import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';


const MIN = 0;
const MAX = 2000;
const STEP = 10;

const Sidebar = ({ setFilteredProducts }) => {
    const [selectedCollections, setSelectedCollections] = useState([]);
    const [priceRange, setPriceRange] = useState([MIN, MAX]); // Use an array for min/max
    const [selectedColors, setSelectedColors] = useState([]);

    const collections = [...new Set(allProducts.map(p => p.category))];
    const colors = ['Blue', 'Purple', 'Orange', 'Gray', 'Green', 'Pink', 'Yellow', 'Black', 'White', 'Red'];

    useEffect(() => {
        const filtered = allProducts.filter(product => {
            const collectionMatch = selectedCollections.length === 0 || selectedCollections.includes(product.category);
            const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
            const colorMatch = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));

            return collectionMatch && priceMatch && colorMatch;
        });
        setFilteredProducts(filtered);
    }, [selectedCollections, priceRange, selectedColors, setFilteredProducts]);

    const handleCollectionChange = (collection) => {
        setSelectedCollections(prev =>
            prev.includes(collection)
                ? prev.filter(c => c !== collection)
                : [...prev, collection]
        );
    };

    const handleColorChange = (color) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    const handlePriceInputChange = (index, value) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = Number(value);
        setPriceRange(newPriceRange);
    };

    return (
        <div className="w-full md:w-64 p-4 border-r border-gray-200">
            {/* Collection Filter */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">COLLECTION</h3>
                <ul className="space-y-2">
                    {collections.map(collection => (
                        <li key={collection} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={`collection-${collection}`}
                                checked={selectedCollections.includes(collection)}
                                onChange={() => handleCollectionChange(collection)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={`collection-${collection}`} className="text-gray-700 cursor-pointer">
                                {collection}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter with input fields and a react-range slider */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">PRICE RANGE</h3>
                <div className="flex flex-col items-center">
                    <Range
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        values={priceRange}
                        onChange={(values) => setPriceRange(values)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: priceRange,
                                        colors: ['#E5E7EB', '#000', '#E5E7EB'],
                                        min: MIN,
                                        max: MAX
                                    }),
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '16px',
                                    width: '16px',
                                    backgroundColor: '#3B82F6',
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    boxShadow: '0px 2px 6px #AAA',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        height: '6px',
                                        width: '6px',
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                    }}
                                />
                            </div>
                        )}
                    />
                    <div className="flex items-center space-x-2 mt-4">
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => handlePriceInputChange(0, e.target.value)}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => handlePriceInputChange(1, e.target.value)}
                            className="w-1/2 p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
            </div>

            {/* Color Filter */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">COLOR</h3>
                <div className="grid grid-cols-2 gap-2">
                    {colors.map(color => (
                        <div key={color} className="flex items-center space-x-2 cursor-pointer" onClick={() => handleColorChange(color)}>
                            <button
                                className={`w-5 h-5 rounded-full border-2 
                                    ${selectedColors.includes(color) ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                aria-label={`Filter by ${color}`}
                            />
                            <span className="text-sm text-gray-700">{color}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;