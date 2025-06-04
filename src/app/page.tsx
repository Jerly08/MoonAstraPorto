"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Moon Astra Studio
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Bringing your digital visions to life
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Specialized in creating beautiful, high-performance digital experiences
            with a focus on detail and user experience.
          </p>
          <div className="flex gap-4 pt-4">
            <Link 
              href="/contact" 
              className="bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/projects" 
              className="border border-foreground px-6 py-3 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </Link>
          </div>
          <div className="flex gap-6 pt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </a>
            <a href="mailto:contact@moonastrastudio.com" aria-label="Email">
              <FaEnvelope className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-80 h-60 md:w-[450px] md:h-[320px] rounded-full overflow-hidden">
            {/* Logo Moon Astra Studio */}
            <Image 
              src="/images/MoonAstra.png" 
              alt="Moon Astra Studio Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We provide comprehensive solutions for your digital needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              description: "Custom websites and web applications built with modern technologies.",
              icon: "🌐"
            },
            {
              title: "UI/UX Design",
              description: "Beautiful and functional interfaces that provide exceptional user experiences.",
              icon: "🎨"
            },
            {
              title: "Digital Marketing",
              description: "Strategic marketing solutions to grow your online presence and reach.",
              icon: "📈"
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Learn more about our services →
          </Link>
        </div>
      </section>
    </div>
  );
}
