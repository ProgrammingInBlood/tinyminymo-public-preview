"use client";

import { motion } from 'framer-motion';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take such as logging in or filling in forms.",
    examples: [
      "Session cookies",
      "Authentication cookies",
      "Security cookies"
    ]
  },
  {
    name: "Performance Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    examples: [
      "Analytics cookies",
      "Load balancing cookies",
      "Response time tracking cookies"
    ]
  },
  {
    name: "Functionality Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers.",
    examples: [
      "Language preference cookies",
      "Theme preference cookies",
      "User customization cookies"
    ]
  },
  {
    name: "Targeting Cookies",
    description: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.",
    examples: [
      "Advertising cookies",
      "Social media cookies",
      "Behavioral tracking cookies"
    ]
  }
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use cookies to enhance your browsing experience and analyze how our website is used. This policy explains how we use cookies and your choices regarding them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </div>

          {cookieTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h2>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Examples:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {type.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p>
                To modify your cookie settings, you can:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Change your browser settings to notify you when you receive a cookie</li>
                <li>Choose to automatically reject all cookies</li>
                <li>Delete cookies manually when you wish</li>
              </ul>
              <p className="mt-4">
                Please note that if you choose to reject or delete cookies, some features of our website may not function properly.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to periodically review this page for the latest information on our cookie practices.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us at privacy@tinyminymo.com or through our Contact page.
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