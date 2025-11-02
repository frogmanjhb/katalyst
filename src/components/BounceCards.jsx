import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './BounceCards.css'

export default function BounceCards({
  className = '',
  projects = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    gsap.fromTo(
      '.bounce-card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    )
  }, [animationStagger, easeType, animationDelay])

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr)
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)')
    } else if (transformStr === 'none') {
      return 'rotate(0deg)'
    } else {
      return `${transformStr} rotate(0deg)`
    }
  }

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const currentX = parseFloat(match[1])
      const newX = currentX + offsetX
      return baseTransform.replace(translateRegex, `translate(${newX}px)`)
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`
    }
  }

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return
    setHoveredIndex(hoveredIdx)
    projects.forEach((_, i) => {
      gsap.killTweensOf(`.bounce-card-${i}`)

      const baseTransform = transformStyles[i] || 'none'

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform)
        gsap.to(`.bounce-card-${i}`, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        })
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160
        const pushedTransform = getPushedTransform(baseTransform, offsetX)

        const distance = Math.abs(hoveredIdx - i)
        const delay = distance * 0.05

        gsap.to(`.bounce-card-${i}`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        })
      }
    })
  }

  const resetSiblings = () => {
    if (!enableHover) return
    setHoveredIndex(null)
    projects.forEach((_, i) => {
      gsap.killTweensOf(`.bounce-card-${i}`)
      const baseTransform = transformStyles[i] || 'none'
      gsap.to(`.bounce-card-${i}`, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      })
    })
  }

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight
      }}
    >
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`bounce-card bounce-card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? 'none',
            textDecoration: 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <div className="bounce-card-image-wrapper">
            <img 
              className="bounce-card-image" 
              src={project.image} 
              alt={project.title}
            />
            <div className={`bounce-card-overlay ${hoveredIndex === idx ? 'active' : ''}`}>
              <div className="bounce-card-content">
                <div className="bounce-card-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <h3 className="bounce-card-title">{project.title}</h3>
                <p className="bounce-card-description">{project.description}</p>
                <div className="bounce-card-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="bounce-card-tag">{tag}</span>
                  ))}
                </div>
                <div className="bounce-card-link">
                  <span>View Project</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
