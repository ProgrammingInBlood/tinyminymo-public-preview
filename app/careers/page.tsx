"use client";

import { motion } from 'framer-motion';

const positions = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description: "We're looking for a Frontend Developer to help build delightful user experiences for our e-commerce platform.",
    requirements: [
      "3+ years of experience with React and Next.js",
      "Strong understanding of TypeScript",
      "Experience with modern CSS and Tailwind",
      "Knowledge of responsive design and accessibility",
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create beautiful and intuitive interfaces for our customers.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Experience with e-commerce platforms",
      "Strong portfolio showcasing web/mobile designs",
    ]
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Create engaging content for our blog, social media, and product descriptions.",
    requirements: [
      "2+ years of content writing experience",
      "Strong understanding of SEO",
      "Experience in e-commerce or retail",
      "Excellent English writing skills",
    ]
  },
  {
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Delhi, India",
    type: "Full-time",
    description: "Help our customers have the best shopping experience by providing excellent support.",
    requirements: [
      "2+ years of customer service experience",
      "Strong communication skills",
      "Problem-solving abilities",
      "Experience with support tools",
    ]
  }
];

const benefits = [
  {
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family",
    icon: "🏥"
  },
  {
    title: "Flexible Hours",
    description: "Work-life balance with flexible timing",
    icon: "⏰"
  },
  {
    title: "Remote Work",
    description: "Option to work from anywhere",
    icon: "🏠"
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses and conferences",
    icon: "📚"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-[92px]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're building the future of cute and kawaii e-commerce in India. Join us in our mission to bring joy and happiness through our products.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {position.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
} 