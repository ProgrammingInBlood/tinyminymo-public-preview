"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function PetContainer() {
  const [happiness, setHappiness] = useState(50);
  const [hunger, setHunger] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePet = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setHappiness(prev => Math.min(100, prev + 10));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleFeed = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setHunger(prev => Math.min(100, prev + 20));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <motion.div
        animate={isAnimating ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
        onClick={handlePet}
      >
        <Image
          src="/pet-normal.png"
          alt="Your digital pet"
          width={300}
          height={300}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">Happiness:</span>
          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "50%" }}
              animate={{ width: `${happiness}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">Hunger:</span>
          <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary"
              initial={{ width: "50%" }}
              animate={{ width: `${hunger}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFeed}
            className="bg-secondary text-white px-6 py-2 rounded-full font-medium"
          >
            Feed
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePet}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium"
          >
            Pet
          </motion.button>
        </div>
      </div>
    </div>
  );
} 