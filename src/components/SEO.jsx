import { useEffect } from 'react'

function SEO() {
  useEffect(() => {
    // Organization/Company Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Katalyst LABS",
      "alternateName": "Katalyst LABS Web Development",
      "url": "https://katalystlabs.co.za",
      "logo": "https://katalystlabs.co.za/favicon-16x16.png",
      "description": "Expert web development and custom software solutions for businesses. Professional web developers specializing in responsive websites, e-commerce platforms, and business automation.",
      "email": "info@katalystlabs.co.za",
      "telephone": "+27-66-221-8260",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/katalystlabs",
        "https://twitter.com/katalystlabs",
        "https://github.com/katalystlabs"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+27-66-221-8260",
        "contactType": "Customer Service",
        "email": "info@katalystlabs.co.za",
        "availableLanguage": "English"
      },
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Web Development",
        "Website Development",
        "Custom Software Development",
        "E-commerce Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Responsive Web Design",
        "Business Software",
        "Web Application Development",
        "Mobile Web Development",
        "UI/UX Design",
        "API Development",
        "Database Design",
        "Cloud Solutions",
        "Website Maintenance",
        "SEO Optimization",
        "Performance Optimization",
        "React Development",
        "JavaScript Development",
        "WordPress Development",
        "Custom Website Design",
        "Business Automation",
        "Digital Transformation"
      ]
    }

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Katalyst LABS",
      "description": "Expert web development and custom software solutions. Professional web developers offering website development, e-commerce solutions, and business automation services.",
      "url": "https://katalystlabs.co.za",
      "telephone": "+27-66-221-8260",
      "email": "info@katalystlabs.co.za",
      "priceRange": "$$",
      "serviceType": [
        "Web Development",
        "Website Development",
        "Custom Software Development",
        "E-commerce Development",
        "Web Application Development"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      }
    }

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Katalyst LABS",
      "url": "https://katalystlabs.co.za",
      "description": "Expert web development and custom software solutions for businesses",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://katalystlabs.co.za/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }

    // Service Schema for each service
    const websiteDevelopmentService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Website Development",
      "provider": {
        "@type": "Organization",
        "name": "Katalyst LABS"
      },
      "description": "Modern, responsive websites that look great on all devices and convert visitors into customers. SEO optimized, fast loading, mobile-first web development.",
      "areaServed": "Worldwide"
    }

    const customSoftwareService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Custom Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Katalyst LABS"
      },
      "description": "Tailored software solutions to streamline your business operations and improve efficiency. Process automation, database management, API integration, cloud solutions.",
      "areaServed": "Worldwide"
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://katalystlabs.co.za/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://katalystlabs.co.za/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Projects",
          "item": "https://katalystlabs.co.za/#projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "About",
          "item": "https://katalystlabs.co.za/#about"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://katalystlabs.co.za/#contact"
        }
      ]
    }

    // Function to inject schema
    const injectSchema = (schema, id) => {
      // Remove existing script if present
      const existingScript = document.getElementById(id)
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    // Inject all schemas
    injectSchema(organizationSchema, 'organization-schema')
    injectSchema(professionalServiceSchema, 'professional-service-schema')
    injectSchema(websiteSchema, 'website-schema')
    injectSchema(websiteDevelopmentService, 'website-dev-service-schema')
    injectSchema(customSoftwareService, 'custom-software-service-schema')
    injectSchema(breadcrumbSchema, 'breadcrumb-schema')

    // Cleanup function
    return () => {
      const schemaIds = [
        'organization-schema',
        'professional-service-schema',
        'website-schema',
        'website-dev-service-schema',
        'custom-software-service-schema',
        'breadcrumb-schema'
      ]
      schemaIds.forEach(id => {
        const script = document.getElementById(id)
        if (script) script.remove()
      })
    }
  }, [])

  return null // This component doesn't render anything
}

export default SEO

