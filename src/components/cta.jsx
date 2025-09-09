"use client"

import { useEffect } from "react"
import "./cta.css"

const CTA = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelector(".cta-background")
      if (parallax) {
        const speed = scrolled * 0.5
        parallax.style.transform = `translateY(${speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-title">Ready to Transform Your Space?</h2>
          <p className="cta-subtitle">
            Let Catena Dynamic Resources bring your vision to life with our premium paints and expert construction
            services.
          </p>
        </div>
        <div className="cta-buttons">
          <button className="cta-btn cta-btn-primary">Contact Us</button>
          <button className="cta-btn cta-btn-secondary">Visit Store</button>
        </div>
      </div>
    </section>
  )
}

export default CTA
