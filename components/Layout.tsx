'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2023 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
