"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../Cart/CartContext"; // Make sure this path is correct

const CheckoutPage = () => {
  const { cartItems, subtotal, total, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  // ▼▼▼▼▼ THE ONLY CHANGE IS HERE ▼▼▼▼▼
  // Handler for form submission
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // In a real app, you would validate data and send it to your backend here.
    const orderDetails = {
      billingDetails: formData,
      items: cartItems,
      subtotal,
      total,
      paymentMethod,
    };
    console.log("Placing Order with details:", orderDetails);

    // 1. Clear the cart
    clearCart();
    
    // 2. Redirect to the new success page
    router.push("/order-placed"); 
  };
  // ▲▲▲▲▲ THE ONLY CHANGE IS HERE ▲▲▲▲▲
  
  // If cart is empty, redirect or show a message
  if (cartItems.length === 0) {
    // ... (rest of the component is the same)
  }

  return (
    // ... (rest of the JSX is the same)
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Left Column: Billing Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Billing Details</h2>
            <div className="space-y-6">
              {/* Form Fields */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name<span className="text-red-500">*</span></label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required />
              </div>

              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address<span className="text-red-500">*</span></label>
                <input type="text" name="streetAddress" id="streetAddress" value={formData.streetAddress} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required />
              </div>

              <div>
                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, floor, etc. (optional)</label>
                <input type="text" name="apartment" id="apartment" value={formData.apartment} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label htmlFor="townCity" className="block text-sm font-medium text-gray-700">Town / City<span className="text-red-500">*</span></label>
                <input type="text" name="townCity" id="townCity" value={formData.townCity} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number<span className="text-red-500">*</span></label>
                <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address<span className="text-red-500">*</span></label>
                <input type="email" name="emailAddress" id="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
            </div>
             <div className="flex items-center">
                <input id="save-info" name="save-info" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="save-info" className="ml-2 block text-sm text-gray-900">Save this information for faster check-out next time</label>
              </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
                    <p className="text-sm text-gray-800">{item.name}</p>
                   </div>
                   <p className="text-sm font-medium text-gray-900">৳{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal:</span>
                <span className="font-medium text-gray-900">৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping:</span>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-2 mt-2">
                <span>Total:</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="space-y-4">
                <div className="flex items-center border border-gray-200 rounded-md p-3">
                  <input id="bank" name="paymentMethod" type="radio" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"/>
                  <label htmlFor="bank" className="ml-3 block text-sm font-medium text-gray-700">Bank</label>
                  <div className="ml-auto flex space-x-2">
                      <img src="https://i.ibb.co/L5Fp1d1/bkash.png" alt="bKash" className="h-5"/>
                      <img src="https://i.ibb.co/P9WpY8x/visa.png" alt="Visa" className="h-5"/>
                      <img src="https://i.ibb.co/hK2rwcR/mastercard.png" alt="Mastercard" className="h-5"/>
                      <img src="https://i.ibb.co/tZMRk5d/nagad.png" alt="Nagad" className="h-5"/>
                  </div>
                </div>
                 <div className="flex items-center border border-gray-200 rounded-md p-3">
                  <input id="cash" name="paymentMethod" type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"/>
                  <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-700">Cash on delivery</label>
                </div>
            </div>

            {/* Coupon and Place Order */}
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Coupon Code" className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"/>
                <button type="button" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Apply Coupon</button>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
                Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;