"use client";

import { motion } from 'framer-motion';

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Shipping Policy
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Free Shipping</h2>
            <p className="text-gray-600 mb-4">
              We offer free shipping on all orders above ₹999 within India. Orders below ₹999 will be charged a flat shipping rate of ₹99.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Timeline</h2>
            <ul className="space-y-3 text-gray-600">
              <li>Metro Cities: 2-4 business days</li>
              <li>Other Cities: 4-6 business days</li>
              <li>Remote Areas: 6-8 business days</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Tracking</h2>
            <p className="text-gray-600 mb-4">
              Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status on our website using this tracking number.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">International Shipping</h2>
            <p className="text-gray-600 mb-4">
              Currently, we only ship within India. We are working on expanding our shipping services to other countries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 