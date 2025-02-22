"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Top 10 Kawaii Gifts for Anime Lovers",
    excerpt: "Discover the cutest and most unique anime-inspired gifts that will make any fan's day special.",
    image: "/blog/anime-gifts.jpg",
    date: "March 15, 2024",
    category: "Gift Guide",
    readTime: "5 min read",
    slug: "top-10-kawaii-gifts"
  },
  {
    title: "The History of Sanrio Characters",
    excerpt: "From Hello Kitty to Pochacco: Learn about the fascinating history behind your favorite Sanrio characters.",
    image: "/blog/sanrio-history.jpg",
    date: "March 10, 2024",
    category: "Culture",
    readTime: "8 min read",
    slug: "sanrio-characters-history"
  },
  {
    title: "How to Style Your Room with Cute Decor",
    excerpt: "Transform your space into a kawaii paradise with these easy decorating tips and ideas.",
    image: "/blog/room-decor.jpg",
    date: "March 5, 2024",
    category: "Home Decor",
    readTime: "6 min read",
    slug: "cute-room-decor-guide"
  },
  {
    title: "The Rise of Cute Culture in India",
    excerpt: "Exploring how kawaii and cute culture has taken over Indian youth fashion and lifestyle.",
    image: "/blog/cute-culture.jpg",
    date: "March 1, 2024",
    category: "Trends",
    readTime: "7 min read",
    slug: "cute-culture-india"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            TinyMinyMo Blog
          </h1>
          <p className="text-gray-600">
            Discover the latest trends, gift ideas, and cute culture news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Load More Posts
          </button>
        </motion.div>
      </div>
    </div>
  );
} 