import { useState } from 'react'
import './index.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ClientsScroll from './components/ClientsScroll/ClientsScroll'
import Portfolio from './components/Portfolio/Portfolio'
import BeforeAfter from './components/BeforeAfter/BeforeAfter'
import MidCTA from './components/MidCTA/MidCTA'
import Testimonials from './components/Testimonials/Testimonials'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <Cursor />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Navbar />
      <main>
        <Hero />
        <ClientsScroll />
        <Portfolio />
        <BeforeAfter />
        <MidCTA />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
