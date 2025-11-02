function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Katalyst LABS</h3>
              <p>Building the future, one line of code at a time.</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>Website Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>Custom Software</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>E-commerce</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('#services') }}>Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about') }}>About Us</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}>Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Katalyst LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

