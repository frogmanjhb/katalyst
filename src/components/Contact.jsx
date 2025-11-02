import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const showNotification = (message, type = 'info') => {
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) {
      existingNotification.remove()
    }

    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 400px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `

    const notificationContent = notification.querySelector('.notification-content')
    notificationContent.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    `

    const closeBtn = notification.querySelector('.notification-close')
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)

    const closeNotification = () => {
      notification.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 300)
    }

    closeBtn.addEventListener('click', closeNotification)
    setTimeout(closeNotification, 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields.', 'error')
      return
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address.', 'error')
      return
    }

    showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Let's Build Something Amazing Together</h2>
          <p>Ready to transform your business? Get in touch and let's discuss your project.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>info@katalystlabs.co.za</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+27 66 221 8260</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Type"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

