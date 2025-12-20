function Hero() {
  const handleScroll = (targetId) => {
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
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Expert Web Development & 
            <span className="gradient-text"> Custom Software Solutions</span>
          </h1>
          <p className="hero-description">
            Professional web developers specializing in responsive website development, custom web applications, and business software solutions. We build powerful, user-friendly websites and software that help businesses thrive in the digital world.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}>Get Started</a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>Our Services</a>
            <a href="#projects" className="btn btn-tertiary" onClick={(e) => { e.preventDefault(); handleScroll('#projects') }}>Our Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <i className="fas fa-code"></i>
            <div className="floating-elements">
              <div className="element element-1"></div>
              <div className="element element-2"></div>
              <div className="element element-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

