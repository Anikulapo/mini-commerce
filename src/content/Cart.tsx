"use client";

import React, { useState } from "react";
import { Trash2, Plus, Minus, ChevronRight, X, Check } from "lucide-react";
import { useCart } from "@/store/cartStore";
import toast from "react-hot-toast";

const ShoppingCart = () => {
  const { items, total, updateQuantity, removeItem, clearCart, count } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = total();
  const discountPercentage = 10;
  const discount = subtotal * (discountPercentage / 100);
  const deliveryFee = 5;
  const grandTotal = subtotal - discount + deliveryFee;

  const checkout = () => {
    setIsModalOpen(true);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setOrderId(`ORDER-${Date.now()}`);
    setTimeout(() => {
      setIsModalOpen(false);
      setOrderPlaced(false);
    }, 2000);
    clearCart();
    count()
    toast.success(`Order ${orderId} has been Placed, Thank you`)
  };

  return (
    <div className="min-h-screen bg-white p-4 text-black pt-10">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-gray-600">
          <span className="cursor-pointer hover:text-black">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black font-medium">Cart</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-8 text-black">YOUR CART</h1>

            {items.length === 0 ? (
              <div className="flex items-center justify-center  bg-white">
                <h1 className="text-xl text-gray-700">Your cart is empty..</h1>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {item.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-2">
                          {item.selectedSize && (
                            <p>Size: {item.selectedSize}</p>
                          )}
                        </div>
                        <p className="text-2xl font-bold text-black">
                          ${item.newPrice ?? item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-gray-100 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {items.length > 0 ? (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Discount (-{discountPercentage}%)
                    </span>
                    <span className="font-semibold text-red-500">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">
                      ${deliveryFee.toFixed(2)}
                    </span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={checkout}
                  className="group w-full bg-black text-white py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Go to Checkout
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Modal Overlay */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
                      {!orderPlaced ? (
                        <>
                          <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-800">
                              Order Summary
                            </h2>
                            <button
                              onClick={() => setIsModalOpen(false)}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <X size={24} />
                            </button>
                          </div>

                          <div className="p-6">
                            <div className="mb-4">
                              <p className="text-sm text-gray-600 mb-2">
                                Order ID: {orderId}
                              </p>
                            </div>

                            <div className="space-y-3 mb-6">
                              {items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center space-x-3">
                                    <img
                                      src={item.image[0]}
                                      className="w-12 h-12 rounded object-cover"
                                      alt={item.name}
                                    />
                                    <div>
                                      <h3 className="font-medium text-sm">
                                        {item.name}
                                      </h3>
                                      <p className="text-gray-600 text-xs">
                                        Qty: {item.quantity}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="font-semibold text-sm">
                                    ${(item.newPrice ?? item.price!).toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="border-t pt-4 space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Discount</span>
                                <span>-${discount.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span>${deliveryFee.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between font-bold text-lg border-t pt-2">
                                <span>Total</span>
                                <span>${grandTotal.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-3 p-6 border-t">
                            <button
                              onClick={() => setIsModalOpen(false)}
                              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handlePlaceOrder}
                              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                            >
                              Confirm Order
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="p-8 text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check size={32} className="text-green-600" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Order Placed!
                          </h2>
                          <p className="text-gray-600 mb-4">
                            Thank you for your order. You will receive a
                            confirmation email shortly.
                          </p>
                          <p className="text-sm text-gray-500">
                            Order ID: {orderId}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
