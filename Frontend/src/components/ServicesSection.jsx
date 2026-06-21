import React, { useState } from 'react';
import './ServicesSection.css';

const servicesData = {
  Business: [
    {
      title: 'Starter',
      price: '₹1999',
      subtext: '+ Domain charges',
      desc: 'Clean landing page designed to showcase your business, service, or promotion effectively.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Basic Business Requirement Analysis',
        'Fully Responsive Design',
        'Single-Page Landing Website',
        'Smooth Basic Animations',
        'Image & Video Integration',
        'Basic SEO Setup',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    },
    {
      title: 'Professional',
      price: '₹2999',
      subtext: '+ Domain charges',
      desc: 'Professional landing page with enhanced sections and conversion-focused design.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Best Business Requirement Analysis',
        'Enhanced Responsive Design',
        'Multi-Section Landing Website',
        'Smooth Animations',
        'Image & Video Integration',
        'Custom Contact Form Integration',
        'Enhanced SEO Setup',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    },
    {
      title: 'Premium',
      price: '₹3999',
      subtext: '+ Domain charges',
      desc: 'Premium custom landing page with advanced design, animations, and lead-generation features.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Advanced Business Requirement Analysis',
        'Premium Responsive Design',
        'Advanced Website Layout',
        'Professional Animations',
        'Image & Video Integration',
        'Advanced Contact Form Integration',
        'Advanced SEO Setup',
        'Advanced Performance Optimization',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    }
  ],
  Personal: [
    {
      title: 'Starter',
      price: '₹999',
      subtext: '+ Domain charges',
      desc: 'Clean portfolio website for showcasing your profile and projects.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Basic Portfolio Planning',
        'Fully Responsive Design',
        'Single-Page Portfolio Website',
        'Smooth Basic Animations',
        'Image & Video Integration',
        'Basic Contact Section',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    },
    {
      title: 'Professional',
      price: '₹1499',
      subtext: '+ Domain charges',
      desc: 'Professional portfolio website with enhanced sections and customization.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Detailed Portfolio Planning',
        'Enhanced Responsive Design',
        'Multi-Section Portfolio Website',
        'Smooth Animations',
        'Image & Video Integration',
        'Contact Form Integration',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    },
    {
      title: 'Premium',
      price: '₹1999',
      subtext: '+ Domain charges',
      desc: 'Premium custom portfolio with advanced design, animations, and branding.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Advanced Portfolio Strategy',
        'Premium Responsive Design',
        'Custom Portfolio Layout',
        'Professional Animations',
        'Image & Video Integration',
        'Advanced Contact Form Integration',
        'Website Hosting',
        'Domain Connection & Configuration'
      ]
    }
  ],
  Custom: [
    {
      title: 'Landing Page',
      price: 'Custom pricing',
      subtext: '',
      desc: 'Fully customized landing page built around your unique requirements and objectives.',
      buttonText: 'Contact me',
      featuresTitle: 'Choose this plan if:',
      features: [
        'Need features beyond the listed packages',
        'more custom functionality or integrations',
        'Want a completely personalized features',
        'Before choosing this plan explore Build-in landing page plans'
      ]
    },
    {
      title: 'Portfolio',
      price: 'Custom pricing',
      subtext: '',
      desc: 'Premium custom portfolio with advanced design, animations, and branding.',
      buttonText: 'Contact me',
      featuresTitle: 'Included in This Plan:',
      features: [
        'Need features beyond the listed packages',
        'more custom functionality or integrations',
        'Want a completely personalized features',
        'Before choosing this plan explore Build-in portfolio plans'
      ]
    }
  ]
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Business');

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="services-badge">My Services</span>
        <h2 className="services-title">Tailored Solutions for Your Project</h2>
        <p className="services-desc">
          Choose a service plan that matches your project requirements. From modern UI design implementations to robust fullstack platforms, I deliver quality on-time.
        </p>

        {/* Toggle Categories Bar */}
        <div className="services-toggle-bar">
          <button 
            className={`toggle-btn ${activeCategory === 'Business' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Business')}
          >
            Business
          </button>
          <button 
            className={`toggle-btn ${activeCategory === 'Personal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Personal')}
          >
            Personal
          </button>
          <button 
            className={`toggle-btn ${activeCategory === 'Custom' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Custom')}
          >
            Custom
          </button>
        </div>
      </div>

      <div className="services-cards-wrapper">
        <div className={`services-cards ${activeCategory === 'Custom' ? 'custom-layout' : ''}`}>
          {servicesData[activeCategory].map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-header">
                <h3 className="service-title-text">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="price-container">
                  <span className="price-num">{service.price}</span>
                  {service.subtext && (
                    <span className="price-term"> {service.subtext}</span>
                  )}
                </div>
              </div>

              <a href="#contact" className="service-btn" onClick={handleScrollToContact}>
                {service.buttonText}
              </a>

              <div className="features-section">
                <h4 className="features-title">{service.featuresTitle}</h4>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
