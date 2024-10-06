import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import About from '../components/About'
import VideoSection from '../components/VideoSection'
import TestGrid from '../components/TestGrid'

export default function Home() {
  return (
    <main>
      <Hero />
      <TestGrid />
      <FeaturedProducts />
      <About />
      <VideoSection />
    </main>
  )
} 
