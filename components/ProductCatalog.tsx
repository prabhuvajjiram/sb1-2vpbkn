'use client';

import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Classic Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$99.99' },
  { id: 2, name: 'Embroidered Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$129.99' },
  { id: 3, name: 'Printed Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$109.99' },
  { id: 4, name: 'Zari Work Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$149.99' },
  { id: 5, name: 'Handloom Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$119.99' },
  { id: 6, name: 'Silk Blend Cotton Saree', image: 'https://via.placeholder.com/300x400', price: '$159.99' },
];

export default function ProductCatalog() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}