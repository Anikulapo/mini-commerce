"use client";

import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';


 const thumbnails = [
    '/images/prev.png',
    '/images/prev2.png',
    '/images/prev3.png',
  ];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);



  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

 

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleThumbnailClick = (thumb: string) => {
    setSelectedImage(thumb);
  };

  const handleClick = ()=>{

  }

  return (
    <div className=" bg-white text-black px-[5%] pt-[7%] md:pt-[5%] lg:pt-[7%]">
      {/* Header */}

      {/* Breadcrumb */}
      <div className="max-w-7xl py-4">
        <nav className="flex items-center space-x-2 text-gray-500">
          <span className="hover:text-black cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-black cursor-pointer">Shop</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-black cursor-pointer">Men</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black">T-shirts</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
              {thumbnails.map((thumb, index) => (
                <div 
                onClick={() => handleThumbnailClick(thumb)}
                key={index} className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 transition-colors">
                  <img
                    src={thumb}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="One Life Graphic T-Shirt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                ONE LIFE GRAPHIC T-SHIRT
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                </div>
                <span className="text-gray-600">4.5/5</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-black">$260</span>
                <span className="text-2xl text-gray-400 line-through">$300</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  -40%
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
                breathable fabric, it offers superior comfort and style.
              </p>
            </div>

            

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-black ">Choose Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-2  xl:px-6 xl:py-3 rounded-full transition-all duration-400 ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 bg-[#F0F0F0] text-[rgba(0,0,0,.6)] hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-full bg-[#F0F0F0]">
                <button
                  onClick={decrementQuantity}
                  className="p-1 md:p-3 hover:bg-gray-100 rounded-l-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-lg font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-1 md:p-3 hover:bg-gray-100 rounded-r-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
              onClick={handleClick}
              className="flex-1 bg-black text-white py-4 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;