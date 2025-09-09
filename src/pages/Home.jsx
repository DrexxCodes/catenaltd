"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Projects from "../components/project"
import Stats from "../components/stats"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Footer from "../components/footer"
import "./home.css"

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Start the paint patches animation immediately
    // After 2.5 seconds (when all patches have animated), fade out the preloader
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`home-page ${isLoaded ? "loaded" : ""}`}>
      <div className="paint-preloader">
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
        <div className="paint-patch"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />

    </div>
  )
}

export default HomePage