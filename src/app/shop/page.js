// app/shop/page.jsx
"use client";
import ProductCard from '@/components/Shop/ProductCard';
import Sidebar from '@/components/Shop/Sidebar';
import allProducts from '@/data/AllProductsData';
import { useState } from 'react';


const ShopPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-8">
            <Sidebar setFilteredProducts={setFilteredProducts} />
            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ShopPage;