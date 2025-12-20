function Services() {
  const services = [
    {
      icon: 'fa-globe',
      title: 'Website Development',
      description: 'Professional web development services creating modern, responsive websites that look great on all devices and convert visitors into customers. Expert web developers delivering SEO-optimized, high-performance websites.',
      features: ['Responsive Web Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First Development']
    },
    {
      icon: 'fa-cogs',
      title: 'Custom Software Development',
      description: 'Expert custom software development services delivering tailored web applications and business software solutions to streamline your operations and improve efficiency.',
      features: ['Web Application Development', 'Process Automation', 'Database Management', 'API Integration', 'Cloud Solutions']
    },
    {
      icon: 'fa-shopping-cart',
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and customer analytics.',
      features: ['Online Payments', 'Inventory Tracking', 'Customer Management', 'Analytics & Reporting']
    },
    {
      icon: 'fa-headset',
      title: 'Ongoing Support',
      description: 'Reliable maintenance, updates, and technical support to keep your digital presence running smoothly.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Technical Support']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Professional Web Development Services</h2>
          <p>Expert web developers delivering comprehensive website development, custom software, and e-commerce solutions tailored for your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

