"use client"

import "./project.css"

function Projects() {
  // Create more images for smoother infinite scroll effect
  const projectImages = Array.from({ length: 12 }, (_, i) => `project${(i % 9) + 1}.jpg`)
  const reverseProjectImages = [...projectImages].reverse()

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-subtitle">Showcasing our commitment to excellence in construction and roofing</p>
      </div>

      <div className="projects-gallery">
        {/* First row - scrolls left automatically */}
        <div className="projects-row scroll-left">
          {/* Duplicate images for seamless infinite scroll */}
          {[...projectImages, ...projectImages].map((image, index) => (
            <div key={`first-${index}`} className="project-tile">
              <img src={`/${image}`} alt={`Project ${(index % 9) + 1}`} className="project-image" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Second row - scrolls right automatically */}
        <div className="projects-row scroll-right">
          {/* Duplicate images for seamless infinite scroll */}
          {[...reverseProjectImages, ...reverseProjectImages].map((image, index) => (
            <div key={`second-${index}`} className="project-tile">
              <img src={`/${image}`} alt={`Project ${9 - (index % 9)}`} className="project-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="projects-cta">
        <button className="view-all-btn">View All Projects</button>
      </div>
    </section>
  )
}

export default Projects
