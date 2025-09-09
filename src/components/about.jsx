"use client"

import { useEffect, useRef } from "react"
import "./about.css"

const About = () => {
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    if (contentRef.current) observer.observe(contentRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content" ref={contentRef}>
          <div className="about-text">
            <h2 className="about-title">About Catena Dynamic Resources</h2>
            <div className="about-highlight">
              <h3 className="about-subtitle">Your Premier Paint Manufacturing & Construction Partner</h3>
            </div>
            <p className="about-description">
              At Catena Dynamic Resources Limited, we are passionate about transforming spaces through our
              <strong> high-quality paint manufacturing and comprehensive painting services</strong>. As a leading paint
              producer, we create custom formulations tailored to our clients' unique tastes and preferences, ensuring
              every project receives the perfect color and finish.
            </p>
            <p className="about-description">
              Beyond our core paint business, we are a full-service construction company offering general construction,
              real estate solutions, modern roofing materials, carpentry services, building accessories, and
              maintenance. Our skilled professionals combine decades of experience with cutting-edge techniques to
              deliver exceptional results that stand the test of time.
            </p>
            <p className="about-description">
              From residential homes to commercial buildings, we bring your vision to life with our comprehensive
              approach to construction and our signature paint products that truly make spaces come alive.
            </p>
            <div className="about-button-container">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="about-image-container" ref={imageRef}>
          <div className="about-image">
            <img src="/about.jpg" alt="Catena Dynamic Resources - Paint Manufacturing and Construction Services" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
