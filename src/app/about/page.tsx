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
                From crafting elegant websites and branding that capture your vision, to launching marketing campaigns that resonate — and now offering custom digital art commissions and Web3 development for those stepping into the next generation of the internet — we&apos;re here to help businesses of all sizes grow, evolve, and stand out.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                At Moon Astra Studio, we&apos;re not just building projects — we&apos;re building possibilities.
              </p>
            </motion.div>
            <motion.div
              className="relative h-auto rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a new studio, we&apos;re committed to becoming a leading creative force in the digital space by:
              </p>
              <ul className="space-y-3">
                {[
                  "Building long-lasting relationships with clients based on trust and results",
                  "Staying at the forefront of technology trends and design innovations",
                  "Growing our expertise across web, mobile, and emerging platforms",
                  "Creating digital solutions that make a meaningful impact for businesses"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Additional About Sections */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Technologies & Tools */}
            <motion.div
              className="relative h-auto rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Technical Stack</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We work with cutting-edge technologies to deliver the best solutions:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "React & Next.js", "TypeScript", "Tailwind CSS", 
                  "Node.js", "Framer Motion", "Web3/Blockchain",
                  "Responsive Design", "UI/UX Design", "GraphQL/REST"
                ].map((tech, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-md text-center">
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Brand Story/Logo Showcase */}
            <motion.div
              className="relative h-auto rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                    MA
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Brand Story</h3>
                <p className="text-center max-w-md">
                  The name &apos;Moon Astra&apos; represents our philosophy of reaching for the stars while staying grounded. Like the moon, we reflect creativity and illuminate new possibilities for our clients.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Process Overview */}
          <motion.div
            className="relative h-auto rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "Listen",
                  description: "We begin by understanding your unique challenges and goals."
                },
                {
                  step: "Plan",
                  description: "We create a comprehensive strategy tailored to your specific needs."
                },
                {
                  step: "Create",
                  description: "Our team brings ideas to life with creativity and technical expertise."
                },
                {
                  step: "Deliver",
                  description: "We implement solutions that exceed expectations and drive results."
                }
              ].map((process, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{process.step}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
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