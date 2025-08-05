// app/product/[id]/page.jsx
"use client";
import AddReviewForm from '@/components/product-details/AddReviewForm';
import ProductImageGallery from '@/components/product-details/ProductImageGallery';
import ProductInfo from '@/components/product-details/ProductInfo';
import RatingsReviews from '@/components/product-details/RatingsReviews';
import RelatedItems from '@/components/product-details/RelatedItems';
import allProducts from '@/data/AllProductsData';
import React, { useEffect, useState } from 'react';
; // Your product data

const ProductDetailsPage = ({ params }) => {
    const { id } = typeof params.then === 'function' ? React.use(params) : params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // In a real application, you would fetch product data from an API
        // For now, we'll find it from our local data array
        const foundProduct = allProducts.find(p => p.id === Number(id));

        if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
        } else {
            setError('Product not found');
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div className="text-center py-12">Loading product details...</div>;
    }

    if (error) {
        return <div className="text-center py-12 text-red-600">{error}</div>;
    }

    if (!product) {
        return <div className="text-center py-12">Product data is missing.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
            {/* Product Details Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <ProductImageGallery images={product.images} />
                <ProductInfo product={product} />
            </div>

            {/* Related Items Section */}
            <RelatedItems currentProductId={product.id} />

            {/* Ratings & Reviews Section */}
            <RatingsReviews productId={product.id} />

            {/* Add Review Form Section */}
            <AddReviewForm productId={product.id} />
        </div>
    );
};

export default ProductDetailsPage;