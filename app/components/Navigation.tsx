"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  {
    name: 'Gifts',
    href: '/gifts',
    subItems: [
      { name: 'New Arrivals', href: '/gifts/new-arrivals' },
      { name: 'Gifts for Him', href: '/gifts/for-him' },
      { name: 'Gifts for Her', href: '/gifts/for-her' },
      { name: 'Gifts for Kids', href: '/gifts/for-kids' },
    ]
  },
  {
    name: 'Shop by Category',
    href: '/shop',
    subItems: [
      { name: 'Action Figures', href: '/shop/action-figures' },
      { name: 'Astronaut Gifts', href: '/shop/astronaut' },
      { name: 'Anime Gifts', href: '/shop/anime' },
      { name: 'Bobbleheads', href: '/shop/bobbleheads' },
      { name: 'Soft toys', href: '/shop/soft-toys' },
      { name: 'Sanrio Gifts', href: '/shop/sanrio' },
    ]
  },
  {
    name: 'Home Decor',
    href: '/home-decor',
    subItems: [
      { name: 'Lights & LED', href: '/home-decor/lights' },
      { name: 'All Home Decor', href: '/home-decor/all' },
    ]
  },
  {
    name: 'Stationery Love',
    href: '/stationery',
    subItems: [
      { name: 'All Stationery', href: '/stationery/all' },
      { name: 'Pen & Highlighters', href: '/stationery/pens' },
      { name: 'Erasers', href: '/stationery/erasers' },
      { name: 'Sharpeners', href: '/stationery/sharpeners' },
      { name: 'Diary & Notebooks', href: '/stationery/notebooks' },
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#FF6B6B] text-white">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-center text-sm">
          Free Shipping on Orders Above ₹999
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Upper Navigation */}
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">
                TinyMinyMo
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for gifts..."
                  className="w-full h-10 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B6B] focus:ring-1 focus:ring-[#FF6B6B]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-6">
              <Link href="/login" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">
                <UserIcon className="w-6 h-6" />
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-[#FF6B6B] transition-colors relative">
                <ShoppingBagIcon className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF6B6B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="h-12 flex items-center -mx-4 px-4">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#FF6B6B] text-sm font-medium">
                    <span>{item.name}</span>
                    <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {activeMenu === item.name && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg mt-1 py-2 border border-gray-100">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FF6B6B] hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-12 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-lg border border-gray-100"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[96px] bg-white md:hidden z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for gifts..."
                className="w-full h-12 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="font-medium text-gray-900">
                  {item.name}
                </div>
                <div className="grid gap-2 pl-4">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="text-gray-600 hover:text-[#FF6B6B] py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 