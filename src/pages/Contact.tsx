import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Handle form submission
    console.log('Form submitted');
    setFormStatus('sent');
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-[#8B4513] mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-[#8B4513] focus:border-[#8B4513]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-[#8B4513] focus:border-[#8B4513]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-[#8B4513] focus:border-[#8B4513]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#A0522D] transition-colors"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'sent' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#8B4513] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513]">Address</h3>
                  <p className="text-gray-600">123 Baker Street<br />City, State 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#8B4513] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513]">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#8B4513] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513]">Email</h3>
                  <p className="text-gray-600">info@bakerstreet.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-[#8B4513] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#8B4513]">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7:00 AM - 7:00 PM<br />
                    Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: 8:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}