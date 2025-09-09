"use client"

import "./footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Catena Dynamic Resources" className="footer-logo-image" />
            </div>
            <p className="footer-tagline">Building dreams with modern roofing & construction materials</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#catalogue">Catalogue</a>
                </li>
                <li>
                  <a href="#projects">Our Projects</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#painting">Painting Services</a>
                </li>
                <li>
                  <a href="#roofing">Roofing Solutions</a>
                </li>
                <li>
                  <a href="#construction">Construction Materials</a>
                </li>
                <li>
                  <a href="#consultation">Design Consultation</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="tel:+234">+234 XXX XXX XXXX</a>
                </li>
                <li>
                  <a href="mailto:info@catena.com">info@catena.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">© {currentYear} Catena Dynamic Resources. All rights reserved.</p>
            <p className="developer-credit">
              Developed by <span className="developer-name">Drexx</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
