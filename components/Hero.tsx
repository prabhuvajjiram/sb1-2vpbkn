'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rajambal Cottons</h1>
        <p className="text-xl md:text-2xl mb-8">Discover the Elegance of Pure Cotton Sarees</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-500 px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Collection
        </motion.button>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80"
          alt="Saree Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}