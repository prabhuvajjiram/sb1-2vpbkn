'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/process', label: 'Our Process' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-200">
            Rajambal Cottons
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 dark:hover:text-purple-400 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {mounted && (
                <button
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 dark:hover:text-purple-400 rounded-md transition-colors duration-200"
                >
                  {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}