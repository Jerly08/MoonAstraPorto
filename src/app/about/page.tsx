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
                Moon Astra Studio was founded in 2023 with a simple mission: to create digital experiences that inspire, engage, and deliver results. What started as a small team of passionate individuals has grown into a full-service digital studio with expertise across web development, design, and digital marketing.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We believe that great design and development should be accessible to everyone, which is why we work with businesses of all sizes - from startups to established enterprises.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our approach combines creativity with technical expertise, allowing us to deliver solutions that not only look beautiful but perform exceptionally well.
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

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "Founder & Creative Director",
                bio: "Jane has over 10 years of experience in design and web development.",
                bgColor: "from-pink-500 to-red-600"
              },
              {
                name: "John Smith",
                role: "Lead Developer",
                bio: "John is an expert in frontend and backend technologies with a passion for clean code.",
                bgColor: "from-blue-500 to-cyan-600"
              },
              {
                name: "Emily Chen",
                role: "UI/UX Designer",
                bio: "Emily creates beautiful interfaces that are intuitive and engaging for users.",
                bgColor: "from-purple-500 to-indigo-600"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="relative h-80 w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} flex items-center justify-center text-white text-4xl font-bold`}>
                    {member.name.split(' ').map(part => part[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 