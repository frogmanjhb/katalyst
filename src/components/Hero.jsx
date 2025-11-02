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
            Transform Your Business with 
            <span className="gradient-text"> Custom Software</span>
          </h1>
          <p className="hero-description">
            We build powerful, user-friendly websites and software solutions that help small businesses or individuals thrive in the digital world.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}>Get Started</a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>Our Services</a>
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

