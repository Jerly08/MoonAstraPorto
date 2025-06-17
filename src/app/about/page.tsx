"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of digital creators dedicated to bringing your visions to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2025, Moon Astra Studio was built on a simple mission: to create digital experiences that inspire, engage, and deliver results. What began as a small team of passionate individuals has grown into a full-service digital studio with expertise across web development, design, digital marketing, digital art, and Web3 technology.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We believe that creativity and technology go hand in hand. Our team brings together designers, developers, strategists, and digital artists to build experiences that not only look beautiful but also function seamlessly and drive real impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                From crafting elegant websites and branding that capture your vision, to launching marketing campaigns that resonate — and now offering custom digital art commissions and Web3 development for those stepping into the next generation of the internet — we're here to help businesses of all sizes grow, evolve, and stand out.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                At Moon Astra Studio, we're not just building projects — we're building possibilities.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                Our Team
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality in everything we create.",
                icon: "✨"
              },
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve problems.",
                icon: "💡"
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from working closely with our clients.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 