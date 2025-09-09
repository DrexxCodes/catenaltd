"use client"

import { useState, useEffect } from "react"
import "./navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setServicesOpen(false)
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="Catena Dynamic Resources" className="logo-image" />
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            About Us
          </a>
          {/* <a href="#catalogue" className="nav-link" onClick={handleLinkClick}>
            Catalogue
          </a> */}

          <div className={`nav-dropdown ${servicesOpen ? "active" : ""}`}>
            <button className="nav-link dropdown-toggle" onClick={toggleServices}>
              Services
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div className="dropdown-menu">
              <a href="#roofing" className="dropdown-item" onClick={handleLinkClick}>
                Roofing Solutions
              </a>
              <a href="#construction" className="dropdown-item" onClick={handleLinkClick}>
                Construction Materials
              </a>
              <a href="#painting" className="dropdown-item" onClick={handleLinkClick}>
                Painting Services
              </a>
              <a href="#consultation" className="dropdown-item" onClick={handleLinkClick}>
                Design Consultation
              </a>
            </div>
          </div>

          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            Our Projects
          </a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact Us
          </a>
          {/* <a href="#testimonials" className="nav-link" onClick={handleLinkClick}>
            Testimonials
          </a> */}
        </div>

        <div className="nav-hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
