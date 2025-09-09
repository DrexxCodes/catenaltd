"use client"

import { useState, useEffect } from "react"
import "./Hero.css"

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg", "/hero5.jpg", "/hero6.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="hero">
      <div className="hero-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Welcome to Catena Dynamic Resources Limited</h1>
        <p className="hero-subtitle">
          Light up your space, with our lovely paints.
          <br />
          Where quality meets affordability!
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Visit Store</button>
          <button className="btn btn-secondary">Get in touch</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
