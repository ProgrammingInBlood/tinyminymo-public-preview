"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-bold text-center mb-12"
        >
          About <span className="text-primary">TinyMinyMo</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-xl text-gray-600 mb-8 text-center">
            TinyMinyMo is your personal digital pet companion, bringing joy and fun to your everyday digital life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600">
                Born from a love of virtual pets and modern technology, TinyMinyMo combines nostalgia with cutting-edge web capabilities to create a unique pet care experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Interactive pet care system</li>
                <li>Real-time pet emotions</li>
                <li>Customizable pet accessories</li>
                <li>Daily rewards and achievements</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              Become part of our growing community of pet lovers and share your TinyMinyMo adventures!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 