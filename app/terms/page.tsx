"use client";

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Terms of Service
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none space-y-8"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using TinyMinyMo&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                To access certain features of our website, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Product Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We strive to provide accurate product descriptions and pricing. However:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Product images are for illustration purposes only</li>
                <li>We reserve the right to modify prices without notice</li>
                <li>Product availability is subject to change</li>
                <li>We may limit order quantities at our discretion</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Payment and Shipping</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By making a purchase, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide valid payment information</li>
                <li>Pay all charges incurred through your account</li>
                <li>Pay applicable shipping and handling fees</li>
                <li>Provide accurate shipping information</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Returns and Refunds</h2>
            <p className="text-gray-600">
              Our return policy allows returns within 30 days of delivery. Please refer to our Returns Policy page for detailed information about the return process and eligibility criteria.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on our website, including text, graphics, logos, and images, is the property of TinyMinyMo and is protected by copyright and other intellectual property laws.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              TinyMinyMo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any products purchased through our website.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@tinyminymo.com or through our Contact page.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-gray-500 text-center"
        >
          Last updated: March 15, 2024
        </motion.div>
      </div>
    </div>
  );
} 