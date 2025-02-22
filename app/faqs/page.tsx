"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "For metro cities, delivery takes 2-4 business days. Other cities take 4-6 business days, and remote areas may take 6-8 business days."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free shipping on all orders above ₹999 within India. Orders below ₹999 will be charged a flat shipping rate of ₹99."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days of delivery for a full refund."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this number to track your order on our website."
  },
  {
    question: "Are the products authentic?",
    answer: "Yes, all our products are 100% authentic and sourced directly from authorized distributors or manufacturers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, UPI, and cash on delivery (COD) for all orders."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "You can modify or cancel your order within 1 hour of placing it. After that, the order will be processed for shipping."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. We're working on expanding our shipping services to other countries."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our products and services.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
} 