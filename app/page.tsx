"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  {
    name: "Cute Shin-chan Butt Tap Lamp",
    price: 1099,
    originalPrice: 1399,
    image: "/products/shin-chan-lamp.jpg",
    href: "/products/shin-chan-lamp",
    tag: "New"
  },
  {
    name: "Shin-chan Cosplay Action Figure",
    price: 299,
    originalPrice: 399,
    image: "/products/shin-chan-figure.jpg",
    href: "/products/shin-chan-figure",
    tag: "Trending"
  },
  {
    name: "Cute Sanrio Action Figure",
    price: 299,
    originalPrice: 399,
    image: "/products/sanrio-figure.jpg",
    href: "/products/sanrio-figure",
    tag: "Limited"
  },
  {
    name: "Cute Pochacco Soft Toy",
    price: 799,
    originalPrice: 999,
    image: "/products/pochacco-toy.jpg",
    href: "/products/pochacco-toy",
    tag: "Best Seller"
  }
];

const categories = [
  { name: "Gifts for Him", image: "/categories/for-him.jpg", href: "/gifts/for-him", count: "150+ items" },
  { name: "Gifts for Her", image: "/categories/for-her.jpg", href: "/gifts/for-her", count: "200+ items" },
  { name: "Gifts for Kids", image: "/categories/for-kids.jpg", href: "/gifts/for-kids", count: "180+ items" },
  { name: "Birthday Gifts", image: "/categories/birthday.jpg", href: "/gifts/birthday", count: "120+ items" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full pt-[92px]">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero-banner.jpg"
              alt="Special offers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center">
              <div className="ml-8 md:ml-16 text-white max-w-xl">
                <h2 className="text-4xl font-bold mb-4">
                  Special Offers
                </h2>
                <p className="text-xl mb-6">
                  Discover amazing deals on our cutest items
                </p>
                <button className="bg-[#FF6B6B] text-white px-8 py-3 rounded font-medium hover:bg-[#ff5252] transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
            <Link 
              href="/new-arrivals"
              className="text-[#FF6B6B] hover:text-[#ff5252] font-medium flex items-center gap-2"
            >
              View All
              <span aria-hidden="true" className="text-lg">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {newArrivals.map((product) => (
              <Link 
                key={product.name}
                href={product.href}
                className="group block"
              >
                <div className="space-y-4">
                  <div className="relative aspect-square rounded overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#FF6B6B] text-white text-xs font-medium px-2.5 py-1 rounded">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm text-gray-900 font-medium line-clamp-2 group-hover:text-[#FF6B6B] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF6B6B] font-bold">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{category.name}</h3>
                      <p className="text-sm text-white/90">{category.count}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center space-y-3"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Free Shipping",
    description: "On orders above ₹999",
    icon: "🚚"
  },
  {
    title: "Secure Payments",
    description: "100% secure transactions",
    icon: "🔒"
  },
  {
    title: "24/7 Support",
    description: "Always here to help you",
    icon: "💬"
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns",
    icon: "↩️"
  }
];
