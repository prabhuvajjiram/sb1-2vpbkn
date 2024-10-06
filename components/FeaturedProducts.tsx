'use client';

import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Classic Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 2, name: 'Embroidered Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 3, name: 'Printed Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 4, name: 'Zari Work Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 5, name: 'Handloom Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 6, name: 'Silk Blend Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 7, name: 'Designer Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 8, name: 'Festive Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
  { id: 9, name: 'Casual Cotton Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80' },
];

// In FeaturedProducts.tsx

export default function FeaturedProducts() {
  console.log('FeaturedProducts component rendered');
  return (
    <section className="py-16 bg-black w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2 text-white truncate">{product.name}</h3>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
