"use client";
import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

const Cart = ({ isCartOpen, toggleCart }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal, total } = useCart();

  return (
    <>
      {/* Background Blur Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleCart}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-gray-50 z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-white">
          <h2 className="font-bold text-xl text-gray-800">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items Container */}
        <div className="flex-grow p-5 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold">Your cart is empty</h3>
              <p className="text-sm">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/80x80/e2e8f0/64748b?text=Image'; }}
                  />
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Price: <span className="font-medium text-blue-600">৳{item.price}</span></p>
                    </div>
                    {/* Quantity Adjuster */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-md text-gray-800 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t bg-white/80 backdrop-blur-sm">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span className="font-medium text-gray-800">৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-800 pt-2 border-t mt-2">
                <span>Total:</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={clearCart}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition"
              >
                Reset
              </button>
              <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
