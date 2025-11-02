import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const headerOffset = 70
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    handleLinkClick()
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Katalyst</h2>
          <span className="logo-tagline">LABS</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
          </li>
        </ul>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

