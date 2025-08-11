// components/product-details/AddReviewForm.jsx
"use client";
import { useState } from 'react';
import { Star } from 'lucide-react';
import toast from 'react-hot-toast';

const AddReviewForm = ({ productId }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0); // 0-5 stars selected by user

    // Handles clicking on a star to set the rating
    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation: ensure all fields are filled and a rating is given
        if (!name.trim() || !message.trim() || rating === 0) {
            toast.error('Please fill in all fields and give a rating.');
            return;
        }

        // In a real application, you would send this data to a backend API.
        // For this demonstration, we'll just log it to the console and show a success toast.
        console.log('New Review Submitted:', { productId, name, message, rating, date: new Date().toISOString().split('T')[0] });
        toast.success('Your review has been submitted!');

        // Reset form fields after successful submission
        setName('');
        setMessage('');
        setRating(0);
    };

    return (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Add Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="reviewerName" className="block text-gray-700 text-sm font-bold mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="reviewerName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required // HTML5 validation for required field
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="reviewMessage" className="block text-gray-700 text-sm font-bold mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="reviewMessage"
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your review here..."
                        required // HTML5 validation for required field
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Give Ratings
                    </label>
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={24}
                                className={`cursor-pointer ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-200`}
                                onClick={() => handleStarClick(i)}
                                fill={i < rating ? 'currentColor' : 'none'}
                                stroke={i < rating ? 'currentColor' : 'lightgray'}
                                strokeWidth={1.5}
                            />
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddReviewForm;