"use client";

import React, { useState } from 'react';
import { Trash2, Plus, Minus, Tag, ChevronRight, X , Check} from 'lucide-react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
      image: '/api/placeholder/100/100'
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState()

  const checkout = ()=>{
    setIsModalOpen(true)
    setOrderId(new Date.now)

  }

  
  const [promoCode, setPromoCode] = useState('');
  const discountPercentage = 20;
  const deliveryFee = 15;

  const updateQuantity = (id :number , change:number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id:number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-black">
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
            
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-black mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-600 mb-2">
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                      </div>
                      <p className="text-2xl font-bold text-black">${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-gray-100 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
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
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-black">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (-{discountPercentage}%)</span>
                  <span className="font-semibold text-red-500">-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">${deliveryFee}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button
              onClick={checkout}
              className="group w-full bg-black text-white py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Go to Checkout
                <ChevronRight className="w-5 h-5 transform transition-all duration-700 ease-in-out group-hover:translate-x-3" />
              </button>





               {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
            {!orderPlaced ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Order Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Order ID: {new Date.now()}</p>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3 mb-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{item.image}</span>
                          <div>
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold text-sm">${item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>${deliveryFee}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>


                </div>

                {/* Modal Footer */}
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
              /* Order Confirmation */
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
                <p className="text-gray-600 mb-4">Thank you for your order. You'll receive a confirmation email shortly.</p>
                <p className="text-sm text-gray-500">Order ID: {sampleOrder.id}</p>
              </div>
            )}
          </div>
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;