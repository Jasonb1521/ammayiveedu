"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartSidebar: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <span className="bg-primary text-white text-sm px-2 py-0.5 rounded-full">
                  {getTotalItems()}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto h-[calc(100vh-200px)]">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-center">
                    Your cart is empty
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500 mb-2">
                            {item.category}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 rounded-full bg-white border hover:bg-gray-100 flex items-center justify-center transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 rounded-full bg-white border hover:bg-gray-100 flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary">
                                ₹{item.price * item.quantity}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full text-center text-red-500 hover:text-red-700 text-sm py-2"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{getTotalPrice()}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-outline"
                  >
                    Continue Shopping
                  </button>
                  <button className="btn-primary">Checkout</button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;