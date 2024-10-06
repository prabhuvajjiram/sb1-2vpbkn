'use client';

import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Classic Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$99.99' },
  { id: 2, name: 'Embroidered Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$129.99' },
  { id: 3, name: 'Printed Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$109.99' },
  { id: 4, name: 'Zari Work Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$149.99' },
  { id: 5, name: 'Handloom Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$119.99' },
  { id: 6, name: 'Silk Blend Cotton Saree', image: 'https://via.placeholder.com/150x200', price: '$159.99' },
];

export default function ProductCatalog() {
  return (
    <section className="py-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-32 object-cover object-center"
                width={150}
                height={200}
              />
              <div className="p-2">
                <h3 className="text-xs font-semibold mb-1 text-gray-800 dark:text-gray-200 truncate">{product.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-500 text-white text-xs px-2 py-1 rounded hover:bg-purple-600 transition duration-300"
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
