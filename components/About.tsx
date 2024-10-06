'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  { name: 'Datchyani Vajjiram', role: 'CEO'},
  { name: 'Prabu Vajjiram', role: 'CTO' },
  { name: 'Karthik Suresh', role: 'Designer'},
];

const companyValues = [
  { title: 'Quality', description: 'We are committed to delivering the highest quality cotton products.' },
  { title: 'Sustainability', description: 'Our practices are environmentally friendly and socially responsible.' },
  { title: 'Innovation', description: 'We continuously strive to innovate in our designs and processes.' },
  { title: 'Customer Focus', description: 'Our customers are at the heart of everything we do.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Rajambal Cottons
        </motion.h1>
        
        <div className="mb-16 bg-white bg-opacity-80 shadow-2xl rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg">
          <div className="flex border-b">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 px-4 py-4 text-lg font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-600 hover:bg-green-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <motion.div 
            className="p-8"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'mission' && (
              <p className="text-gray-700 text-lg">Our mission is to provide high-quality, sustainable cotton products that enhance the lives of our customers while supporting ethical manufacturing practices.</p>
            )}
            {activeTab === 'vision' && (
              <p className="text-gray-700 text-lg">We envision a world where sustainable, high-quality cotton products are accessible to all, promoting both comfort and environmental responsibility.</p>
            )}
            {activeTab === 'values' && (
              <ul className="list-disc pl-5 text-gray-700 text-lg">
                <li>Commitment to quality</li>
                <li>Environmental sustainability</li>
                <li>Ethical business practices</li>
                <li>Customer satisfaction</li>
                <li>Continuous innovation</li>
              </ul>
            )}
          </motion.div>
        </div>
        
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Story</h2>
          <div className="bg-white bg-opacity-80 shadow-2xl rounded-lg p-8 backdrop-filter backdrop-blur-lg">
            <p className="text-gray-700 text-lg mb-4">
              Rajambal Cottons was founded in [year] with a vision to bring the finest quality cotton products to our customers. Our journey began in the heart of [location], where we discovered the perfect blend of traditional craftsmanship and modern technology.
            </p>
            <p className="text-gray-700 text-lg">
              Over the years, we've grown from a small family business to a respected name in the cotton industry, always maintaining our commitment to quality, sustainability, and customer satisfaction.
            </p>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-white bg-opacity-80 shadow-2xl rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:bg-opacity-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className={`text-gray-600 text-lg transition-all duration-300 ${hoveredValue === index ? 'text-green-600' : ''}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white bg-opacity-80 shadow-2xl rounded-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:bg-opacity-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
