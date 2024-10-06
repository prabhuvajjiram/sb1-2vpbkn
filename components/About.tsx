'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center max-w-3xl mx-auto"
        >
          Rajambal Cottons is a leading provider of high-quality cotton sarees. 
          With a rich heritage and commitment to craftsmanship, we bring you the 
          finest cotton sarees that blend tradition with contemporary designs.
        </motion.p>
      </div>
    </section>
  )
}