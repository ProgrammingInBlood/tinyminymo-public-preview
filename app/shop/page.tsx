"use client";

import { motion } from 'framer-motion';

const shopItems = [
  {
    id: 1,
    name: 'Premium Food',
    description: 'High-quality food that makes your pet extra happy',
    price: 100,
    image: '/food.png',
    effect: '+20 Happiness, +30 Hunger',
  },
  {
    id: 2,
    name: 'Toy Ball',
    description: 'A bouncy ball for endless fun',
    price: 150,
    image: '/toy-ball.png',
    effect: '+25 Happiness',
  },
  {
    id: 3,
    name: 'Cozy Bed',
    description: 'A comfortable bed for better rest',
    price: 200,
    image: '/bed.png',
    effect: '+15 Happiness, Better Sleep',
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-display font-bold text-center mb-12">
          Pet <span className="text-primary">Shop</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-square relative bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  🎁
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-sm text-primary font-medium mb-4">
                  {item.effect}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{item.price} 💎</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-6 py-2 rounded-full font-medium"
                  >
                    Buy
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 