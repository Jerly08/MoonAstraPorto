"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create responsive, high-performance websites and web applications tailored to your specific needs. Our development approach focuses on clean code, performance optimization, and user experience.",
      features: [
        "Custom Website Development",
        "Web Application Development",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development and Integration",
        "Content Management Systems",
      ],
      icon: "🌐",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive, beautiful interfaces that enhance user engagement and satisfaction. We focus on creating experiences that are both aesthetically pleasing and highly functional.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing and Prototyping",
        "Brand Identity Design",
        "Mobile App Design",
        "Design Systems",
      ],
      icon: "🎨",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "We help you reach your target audience and grow your online presence through strategic digital marketing solutions. Our data-driven approach ensures measurable results and ROI.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Pay-Per-Click (PPC) Advertising",
        "Analytics and Performance Tracking",
      ],
      icon: "📈",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile applications that provide exceptional user experiences across all devices. Our mobile solutions are scalable, secure, and feature-rich.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Development",
        "App Maintenance and Support",
        "App Performance Optimization",
        "App Store Submission Assistance",
      ],
      icon: "📱",
    },
    {
      id: 5,
      title: "Branding & Identity",
      description:
        "We help businesses establish a strong brand identity that resonates with their audience. Our branding solutions are strategic, creative, and designed to make you stand out.",
      features: [
        "Logo Design",
        "Brand Strategy",
        "Visual Identity Systems",
        "Brand Guidelines",
        "Marketing Materials",
        "Brand Positioning",
      ],
      icon: "✨",
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      description:
        "Our consulting services provide expert advice to help you make informed decisions about your digital presence and technology stack. We work closely with you to develop strategies that align with your business goals.",
      features: [
        "Digital Transformation Consulting",
        "Technical Architecture Planning",
        "Technology Stack Selection",
        "Digital Strategy Development",
        "Performance Optimization",
        "Accessibility Audits",
      ],
      icon: "💼",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <h3 className="text-lg font-semibold mb-3">What we offer:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your needs and how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
} 