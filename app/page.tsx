
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Fleet from '@/components/Fleet'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Fleet />
      <Contact />
      <Footer />
    </main>
  )
}
