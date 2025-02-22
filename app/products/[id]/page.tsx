"use client";

import { useState } from 'react';
import { use } from 'react';
import Image from 'next/image';
import { useProduct } from '@/network/queries';
import { useAddToCartMutation } from '@/network/mutations';
import { MinusIcon, PlusIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  
  const { data: product, isLoading } = useProduct(resolvedParams.id);
  const { mutate: addToCart, isPending } = useAddToCartMutation();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-[92px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ productId: product.id, quantity });
  };

  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-[#FF6B6B] text-white text-sm font-medium px-3 py-1 rounded">
                {product.tag}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-2xl font-bold text-[#FF6B6B]">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-[#FF6B6B] disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <MinusIcon className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-[#FF6B6B]"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className="p-2 hover:text-[#FF6B6B]"
              >
                {isWishlist ? (
                  <HeartSolidIcon className="w-6 h-6 text-[#FF6B6B]" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isPending || !product.inStock}
              className="w-full bg-[#FF6B6B] text-white py-4 rounded-lg font-medium hover:bg-[#ff5252] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Adding...' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Free Delivery</h3>
                <p className="text-sm text-gray-600">On orders above ₹999</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 