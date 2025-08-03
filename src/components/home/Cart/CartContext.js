"use client";

import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook for easy access to the context
export const useCart = () => {
  return useContext(CartContext);
};

// Create the Provider component which will wrap your application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already exists, just increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add the new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to update the quantity of an item
  const updateQuantity = (productId, quantity) => {
    const newQuantity = parseInt(quantity);
    if (newQuantity < 1) {
      removeFromCart(productId); // Remove if quantity is less than 1
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // In this example, total is the same as subtotal
  const total = subtotal;
  
  // The value provided to all consuming components
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};