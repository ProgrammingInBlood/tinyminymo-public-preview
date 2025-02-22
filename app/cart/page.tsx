"use client";

import { useCart } from '@/network/queries';
import { useUpdateCartMutation, useRemoveFromCartMutation } from '@/network/mutations';
import Image from 'next/image';
import Link from 'next/link';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { data: cart, isLoading } = useCart();
  const { mutate: updateCart } = useUpdateCartMutation();
  const { mutate: removeFromCart } = useRemoveFromCartMutation();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-[92px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen pt-[92px]">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products to your cart and they will appear here.</p>
          <Link
            href="/"
            className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ff5252] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center rounded"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Link
                        href={`/products/${item.id}`}
                        className="text-lg font-medium text-gray-900 hover:text-[#FF6B6B]"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-[#FF6B6B]"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button
                          onClick={() => updateCart({ productId: item.id, quantity: item.quantity - 1 })}
                          className="p-1 hover:text-[#FF6B6B] disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCart({ productId: item.id, quantity: item.quantity + 1 })}
                          className="p-1 hover:text-[#FF6B6B]"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-medium text-[#FF6B6B]">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cart.total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{cart.total >= 999 ? 'Free' : '₹99'}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{cart.total >= 999 ? cart.total : cart.total + 99}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-[#FF6B6B] text-white py-3 rounded-lg font-medium text-center hover:bg-[#ff5252] transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 