import React from 'react';
import Header from '../components/Navigation';
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import About from '../components/About'
import VideoSection from '../components/VideoSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <About />
      <VideoSection />
    </main>
  )
} 
