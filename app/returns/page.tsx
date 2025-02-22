"use client";

import { motion } from 'framer-motion';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Returns & Exchanges
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">30-Day Return Policy</h2>
            <p className="text-gray-600 mb-4">
              We offer a 30-day return policy for all our products. If you&apos;re not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Item must be unused and in original packaging</li>
              <li>All tags and labels must be attached</li>
              <li>Original receipt or proof of purchase required</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Exchange Process</h2>
            <p className="text-gray-600 mb-4">
              Want to exchange your item for a different size or color? Here&apos;s how:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Log into your account and go to order history</li>
              <li>Select the item you want to exchange</li>
              <li>&quot;Exchange&quot; and select your preferred option</li>
              <li>Print the return shipping label</li>
              <li>Ship the item back to us</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personalized or custom-made items</li>
              <li>Items marked as final sale</li>
              <li>Personal care items</li>
              <li>Damaged or used items</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <p className="text-gray-600 mb-4">
              Once we receive your return:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We&apos;ll inspect the item within 2 business days</li>
              <li>Refund will be processed to original payment method</li>
              <li>You&apos;ll receive a confirmation email</li>
              <li>Refund may take 5-7 business days to appear</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 