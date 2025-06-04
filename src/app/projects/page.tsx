"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "A complete redesign and development of an e-commerce platform with a focus on user experience and conversion optimization.",
      category: "Web Development",
      bgColor: "from-pink-500 to-red-600",
      tags: ["E-commerce", "UI/UX", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Financial Services Mobile App",
      description: "A mobile application for a financial services company that allows users to manage their accounts, investments, and transactions.",
      category: "Mobile Development",
      bgColor: "from-blue-500 to-indigo-600",
      tags: ["Mobile App", "React Native", "FinTech"],
    },
    {
      id: 3,
      title: "Healthcare Provider Platform",
      description: "A comprehensive platform for healthcare providers to manage patient records, appointments, and communications.",
      category: "Web Development",
      bgColor: "from-green-500 to-emerald-600",
      tags: ["Healthcare", "Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Restaurant Ordering System",
      description: "A digital ordering system for a restaurant chain, including a customer-facing app and staff management portal.",
      category: "Web & Mobile Development",
      bgColor: "from-yellow-500 to-amber-600",
      tags: ["Food & Beverage", "Vue.js", "PWA", "Firebase"],
    },
    {
      id: 5,
      title: "Travel Booking Website",
      description: "A modern travel booking website with advanced filtering, booking management, and payment processing.",
      category: "Web Development",
      bgColor: "from-cyan-500 to-sky-600",
      tags: ["Travel", "React", "GraphQL", "Stripe"],
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "A real estate marketplace connecting buyers, sellers, and agents with integrated mapping and property management.",
      category: "Web Development",
      bgColor: "from-purple-500 to-violet-600",
      tags: ["Real Estate", "Next.js", "Google Maps API", "Prisma"],
    },
  ];

  // Categories for filtering
  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Branding"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing our most successful digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4 md:px-8 lg:px-16 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="relative h-60 w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} flex items-center justify-center text-white text-4xl font-bold`}>
                    {project.title.substring(0, 2)}
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s work together to create something amazing. Our team is ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
} 