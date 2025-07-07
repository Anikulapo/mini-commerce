'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { useProduct } from '@/store/productStore';
import { useCart } from '@/store/cartStore';
import Image from 'next/image';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { HashLoader } from "react-spinners";
import toast from 'react-hot-toast';
import { useProducts } from '@/hooks/useProducts';

const ProductPage = () => {
    const {isLoading} = useProducts()
  const { slug } = useParams();
  const { products } = useProduct();
  const { addItem, count } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  useEffect(() => {
    if (slug && products.length > 0) {
      const found = products.find((p) => p.slug === slug);
      if (found) {
        setProduct(found);
        setSelectedImage(found.image[0]);
      }
    }
  }, [slug, products]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleThumbnailClick = (thumb: string) => {
    setSelectedImage(thumb);
  };

  const handleClick = () => {
    if (!product) return;

    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      title: product.title,
      price: product.newPrice ?? product.price,
      image: product.image,
      quantity,
      selectedSize,
    });
    toast.success(
        "Item has been added to your Cart"
    )
    count()
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <HashLoader
          color="#000000"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <HashLoader
          color="#000000"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }
 

  return (
    <div className="bg-white text-black px-[5%] pt-[7%] md:pt-[5%] lg:pt-[5%]">
      {/* Breadcrumb */}
      <div className="max-w-7xl py-4">
        <nav className="flex items-center space-x-2 text-gray-500">
          <Link href="/"><span className="hover:text-black cursor-pointer">Home</span></Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/catalogue"><span className="hover:text-black cursor-pointer">Shop</span></Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black">{product.category}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
              {product.image.map((thumb, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(thumb)}
                  className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      product.rating >= star
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-black">
                ${product.newPrice ?? product.price}
              </span>
              {product.oldPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-black">Choose Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-2 xl:px-6 xl:py-3 rounded-full transition-all duration-400 ${
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
                className="flex-1 bg-black text-white py-4 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
