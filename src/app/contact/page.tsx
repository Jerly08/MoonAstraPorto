"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Let&apos;s discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to contact us directly using the following information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <FaMapMarkerAlt className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Jl. Rw. Jaya No.49, Rawasari<br />
                Kec. Cemp. Putih, Kota Jakarta Pusat<br />
                DKI Jakarta 10570
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <FaEnvelope className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                moonastrastudio@gmail.com
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <FaPhone className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                +62 881 0825 12525
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Working Hours</h3>
            <table className="w-full max-w-md mx-auto text-gray-600 dark:text-gray-300">
              <tbody>
                <tr>
                  <td className="py-2 text-right pr-4">Monday - Friday:</td>
                  <td className="py-2 text-left pl-4">09:00 - 17:00</td>
                </tr>
                <tr>
                  <td className="py-2 text-right pr-4">Saturday:</td>
                  <td className="py-2 text-left pl-4">10:00 - 15:00</td>
                </tr>
                <tr>
                  <td className="py-2 text-right pr-4">Sunday/Public Holiday:</td>
                  <td className="py-2 text-left pl-4">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Us On The Map</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0238431967904!2d106.82114217460319!3d-6.259872193745485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f3a4d2841%3A0xc1ec9c8083272919!2sMoon%20Astra%20Studio!5e0!3m2!1sen!2sid!4v1710425861899!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moon Astra Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 