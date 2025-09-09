"use client"

import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
import "boxicons/css/boxicons.min.css"
import "./testimonials.css"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Homeowner",
    review:
      "Catena Dynamic Resources transformed our home with their exceptional paint services. The quality of their Catena paints is outstanding, and the team's attention to detail was remarkable. Our house looks brand new!",
    avatar: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Property Manager",
    review:
      "We've worked with Catena for multiple construction projects. Their paint manufacturing quality is unmatched, and their construction services are reliable. They consistently deliver on time and within budget.",
    avatar: "/professional-man-suit.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Interior Designer",
    review:
      "As an interior designer, I recommend Catena paints to all my clients. The color range is extensive, the finish is perfect, and their painting services are professional. They truly understand quality.",
    avatar: "/creative-woman-designer.png",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Discover why businesses and homeowners trust Catena Dynamic Resources for their painting and construction
            needs.
          </p>
        </div>

        <div className="testimonials-content">
          {/* Desktop Layout */}
          <div className="testimonials-desktop">
            {/* Left Container - Profile */}
            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-content">
                  <div className="avatar-container">
                    <img src={current.avatar || "/placeholder.svg"} alt={current.name} className="avatar-image" />
                  </div>
                  <h3 className="profile-name">{current.name}</h3>
                  <p className="profile-title">{current.title}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="navigation-controls">
                <button onClick={prevTestimonial} className="nav-button" aria-label="Previous testimonial">
                  <i className="bx bx-chevron-left nav-icon"></i>
                </button>
                <button onClick={nextTestimonial} className="nav-button" aria-label="Next testimonial">
                  <i className="bx bx-chevron-right nav-icon"></i>
                </button>
              </div>
            </div>

            {/* Right Container - Review */}
            <div className="review-section">
              <div className="review-card">
                {/* Decorative Quotation Marks */}
                <div className="quote-mark quote-start">"</div>
                <div className="quote-mark quote-end">"</div>

                <div className="review-content">
                  <p className="review-text">{current.review}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="testimonials-mobile">
            <div className="mobile-card">
              {/* Decorative Quotation Marks */}
              <div className="quote-mark-mobile quote-start-mobile">"</div>
              <div className="quote-mark-mobile quote-end-mobile">"</div>

              {/* Profile Section */}
              <div className="mobile-profile">
                <div className="mobile-avatar-container">
                  <img src={current.avatar || "/placeholder.svg"} alt={current.name} className="mobile-avatar" />
                </div>
                <h3 className="mobile-name">{current.name}</h3>
                <p className="mobile-title">{current.title}</p>
              </div>

              {/* Review Section */}
              <div className="mobile-review">
                <p className="mobile-review-text">{current.review}</p>
              </div>

              {/* Navigation Controls */}
              <div className="mobile-navigation">
                <button onClick={prevTestimonial} className="mobile-nav-button" aria-label="Previous testimonial">
                  <i className="bx bx-chevron-left mobile-nav-icon"></i>
                </button>
                <button onClick={nextTestimonial} className="mobile-nav-button" aria-label="Next testimonial">
                 <i className="bx bx-chevron-right mobile-nav-icon"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`indicator ${index === currentTestimonial ? "indicator-active" : ""}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
