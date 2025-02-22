"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const pressReleases = [
  {
    title: "TinyMinyMo Raises $5M to Expand Kawaii E-commerce Platform",
    date: "March 15, 2024",
    source: "TechCrunch",
    excerpt: "TinyMinyMo, India's leading kawaii e-commerce platform, has raised $5M in Series A funding to expand its operations and product offerings.",
    link: "#"
  },
  {
    title: "How TinyMinyMo is Revolutionizing Gift Shopping in India",
    date: "March 1, 2024",
    source: "Economic Times",
    excerpt: "The startup is changing how Indians shop for gifts by bringing unique and cute products to the market.",
    link: "#"
  },
  {
    title: "TinyMinyMo Named in Top 50 Startups to Watch",
    date: "February 15, 2024",
    source: "YourStory",
    excerpt: "The e-commerce platform has been recognized for its innovative approach to online retail and strong growth.",
    link: "#"
  }
];

const mediaKit = {
  brandAssets: [
    { name: "Logo - Primary", format: "PNG, SVG", size: "2.5 MB" },
    { name: "Logo - Secondary", format: "PNG, SVG", size: "2.1 MB" },
    { name: "Brand Guidelines", format: "PDF", size: "5.2 MB" },
    { name: "Product Photos", format: "ZIP", size: "15.8 MB" }
  ],
  brandColors: [
    { name: "Primary", color: "#FF6B6B" },
    { name: "Secondary", color: "#4ECDC4" },
    { name: "Accent", color: "#FFE66D" }
  ]
};

export default function PressPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Press Room
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get the latest news and updates about TinyMinyMo. For press inquiries, please contact press@tinyminymo.com
          </p>
        </motion.div>

        {/* Press Releases */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Press Releases
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {release.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{release.date}</span>
                      <span>•</span>
                      <span>{release.source}</span>
                    </div>
                  </div>
                  <a
                    href={release.link}
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Read More →
                  </a>
                </div>
                <p className="text-gray-600">{release.excerpt}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Media Kit */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Media Kit
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Assets */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Brand Assets
              </h3>
              <div className="space-y-4">
                {mediaKit.brandAssets.map((asset) => (
                  <div
                    key={asset.name}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{asset.name}</h4>
                      <p className="text-sm text-gray-600">
                        {asset.format} • {asset.size}
                      </p>
                    </div>
                    <button className="text-primary hover:text-primary-dark font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Colors */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Brand Colors
              </h3>
              <div className="space-y-4">
                {mediaKit.brandColors.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-lg"
                      style={{ backgroundColor: color.color }}
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{color.name}</h4>
                      <p className="text-sm text-gray-600">{color.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Media Contact
          </h2>
          <p className="text-gray-600 mb-6">
            For press inquiries, please contact our media relations team.
          </p>
          <a
            href="mailto:press@tinyminymo.com"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Contact Press Team
          </a>
        </motion.section>
      </div>
    </div>
  );
} 