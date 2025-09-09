"use client"

import { useState, useEffect, useRef } from "react"
import "./Services.css"
import "boxicons/css/boxicons.min.css" // Import Boxicons CSS

const Services = () => {
  const [currentService, setCurrentService] = useState(0)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  const services = [
    {
      title: "General Construction",
      subtitle: "Our experts are always ready to carry out your construction works according to plan and as scheduled",
      image: "construction.png",
    },
    {
      title: "Real Estate",
      subtitle:
        "We provide comprehensive real estate solutions, from property development to investment consulting, helping you make informed decisions in the property market",
      image: "real-estate.png",
    },
    {
      title: "Modern Roofing Materials",
      subtitle:
        "We supply and install Stone coated metal roofing tiles, Aluminium roofing sheets, and PVC rainwater system",
      image: "roofing-materials.png",
    },
    {
      title: "High Quality Catena Paints & Painting Services",
      subtitle:
        "Our paints are produced according to our clients' taste to liven up your space, giving a neat & beautiful finish. Skilled painters are available to carry out all your paint works repair-tools",
      image: "painting-services.png",
    },
    {
      title: "Carpentry Services",
      subtitle:
        "We offer excellent carpentry services and supply high-quality wood that is termite-free and doesn't need to be preserved with chemicals",
      image: "carpentry-services.png",
    },
    {
      title: "Building Accessories",
      subtitle:
        "We supply and install Aluminium casement windows, high quality doors, high quality, ageless, durable South African bricks, high grade stainless steel handrails and excellent quality of Ornamental Wrought Iron components. These are guaranteed to give your building/house a beautiful finish",
      image: "building-accessories.png",
    },
    {
      title: "Product Installation",
      subtitle:
        "We not only supply high quality roofing products and building accessories; but also carry out their installations",
      image: "product-installation.png",
    },
    {
      title: "Maintenance Services",
      subtitle:
        "We repair and revamp old, faded, leaking and faulty roofing jobs. We renovate and refurbish dilapidated houses and carry out general repairs. Our services are carried out by highly skilled and experienced professionals/staff that are always available to satisfy the demands of our clients",
      image: "maintenance-services.png",
    },
  ]

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [services.length])

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

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 ref={titleRef} className="services-title">
            Our Services
          </h2>
          <p ref={subtitleRef} className="services-subtitle">
            We have worked on different successful projects and supplied quality Roofing Materials of different kinds
            such as Stone Coated Metal Roofing Tiles, Aluminium Roofing Sheets, and Many other Building products.
          </p>
        </div>

        <div className="services-carousel">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevService}>
            <i className="bx bx-chevron-left"></i>
          </button>

          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentService * 100}%)` }}>
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-image">
                    <img src={`/${service.image}`} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={nextService}>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentService ? "active" : ""}`}
              onClick={() => setCurrentService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
