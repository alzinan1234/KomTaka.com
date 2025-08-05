// components/product-details/RatingsReviews.jsx
"use client";
import Allreviews from '@/data/reviews'; // Corrected import name to match the export
import { Star } from 'lucide-react';


// Component to display a single review card
const ReviewCard = ({ review }) => {
    // Generate star icons based on the review rating
    const ratingStars = [...Array(5)].map((_, i) => (
        <Star
            key={i}
            size={16}
            fill={i < Math.floor(review.rating) ? 'currentColor' : 'none'}
            stroke={i < Math.floor(review.rating) ? 'currentColor' : 'lightgray'}
            strokeWidth={1.5}
            className="text-yellow-400"
        />
    ));

    return (
        <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
            <div className="flex items-center mb-2">
                {/* Avatar / Initial */}
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg mr-3">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">{review.author}</h4>
                    <div className="flex items-center">
                        {ratingStars}
                        <span className="ml-2 text-sm text-gray-500">{review.rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
        </div>
    );
};

const RatingsReviews = ({ productId }) => {
    // Filter reviews relevant to the current product ID
    const productReviews = Allreviews.filter(review => review.productId === productId);

    return (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Ratings & Review</h2>
            {productReviews.length === 0 ? (
                // Message when no reviews are available
                <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            ) : (
                // Grid to display existing reviews
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {productReviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RatingsReviews;