"use client"

import { useState, useEffect, useRef } from "react"
import "./Stats.css"

function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    quality: 0
  })
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  const statsData = [
    {
      key: 'projects',
      target: 1000,
      suffix: '+',
      label: 'Completed Projects',
      icon: '🏗️'
    },
    {
      key: 'clients',
      target: 200,
      suffix: '+',
      label: 'Happy Clients',
      icon: '😊'
    },
    {
      key: 'experience',
      target: 15,
      suffix: '',
      label: 'Years Experience',
      icon: '📅'
    },
    {
      key: 'quality',
      target: 100,
      suffix: '%',
      label: 'Quality Assurance',
      icon: '✨'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
            startCountAnimation()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const startCountAnimation = () => {
    const duration = 2000 // 2 seconds
    const frameRate = 60
    const totalFrames = (duration / 1000) * frameRate
    let currentFrame = 0

    const animate = () => {
      currentFrame++
      const progress = currentFrame / totalFrames

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounts({
        projects: Math.floor(statsData[0].target * easeOutQuart),
        clients: Math.floor(statsData[1].target * easeOutQuart),
        experience: Math.floor(statsData[2].target * easeOutQuart),
        quality: Math.floor(statsData[3].target * easeOutQuart)
      })

      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final values are exact
        setCounts({
          projects: statsData[0].target,
          clients: statsData[1].target,
          experience: statsData[2].target,
          quality: statsData[3].target
        })
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section className={`stats-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Our Achievements</h2>
          <p className="stats-subtitle">Numbers that speak for our excellence</p>
        </div>
        
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div 
              key={stat.key} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">
                {counts[stat.key].toLocaleString()}{stat.suffix}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
              <div className="stat-progress">
                <div 
                  className="stat-progress-bar"
                  style={{ 
                    width: `${(counts[stat.key] / stat.target) * 100}%`,
                    animationDelay: `${index * 0.3}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats