function Services() {
  const services = [
    {
      icon: 'fa-globe',
      title: 'Website Development',
      description: 'Modern, responsive websites that look great on all devices and convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First']
    },
    {
      icon: 'fa-cogs',
      title: 'Custom Software',
      description: 'Tailored software solutions to streamline your business operations and improve efficiency.',
      features: ['Process Automation', 'Database Management', 'API Integration', 'Cloud Solutions']
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
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions tailored for your business needs</p>
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

