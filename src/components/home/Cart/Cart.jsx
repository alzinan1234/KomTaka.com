"use client";
import React from "react";
import { X } from "lucide-react";
import { useCart } from "./CartContext";
 // 1. Import hook

const Cart = ({ isCartOpen, toggleCart }) => {
  // 2. Get all state and functions from the context
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal, total } = useCart();

  return (
    <>
      {/* Background Blur Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleCart}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[350px] h-full bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Your Cart ({cartItems.length})</h2>
          <button onClick={toggleCart}>
            <X className="text-black w-6 h-6" />
          </button>
        </div>

        {/* 3. Make Items dynamic */}
        <div className="p-4 space-y-4 h-[calc(100%-220px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 items-center border rounded-md p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <select
                      className="border rounded px-1 text-sm"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    >
                      {[...Array(10).keys()].map((qty) => (
                        <option key={qty + 1} value={qty + 1}>
                          {qty + 1}
                        </option>
                      ))}
                    </select>
                    <span className="font-semibold text-sm">৳{item.price}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <X className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* 4. Make Footer dynamic */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-base mt-2">
            <span>Total:</span>
            <span>৳{total.toFixed(2)}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={clearCart}
              className="w-full border rounded px-4 py-2 hover:bg-gray-100 transition"
            >
              Reset
            </button>
            <button className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;