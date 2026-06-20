import React from 'react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    title: 'Basic Frontend',
    price: '$499',
    description: 'Perfect for landing pages, simple portfolios, and marketing campaigns.',
    features: [
      'Single Page App (React)',
      'Figma to HTML Conversion',
      'Fully Responsive Layout',
      'SEO Friendly Markup',
      '2 Rounds of Revisions',
      '3 Days Support Delivery'
    ],
    badge: 'Popular for Startups'
  },
  {
    id: 2,
    title: 'Professional Fullstack',
    price: '$1,299',
    description: 'Perfect for dynamic web apps, portals, and businesses needing a DB backend.',
    features: [
      'Multi-page React Web App',
      'Spring Boot Backend Integration',
      'MongoDB Database Setup',
      'User Authentication & Roles',
      'Admin Control Panel',
      '30 Days Post-Launch Support'
    ],
    badge: 'Best Value',
    popular: true
  },
  {
    id: 3,
    title: 'Enterprise Solution',
    price: '$2,499',
    description: 'Perfect for high-performance SaaS applications with strict API/security guidelines.',
    features: [
      'Custom React Design System',
      'Distributed Spring Boot microservices',
      'Data modeling & DB optimization',
      'Advanced Security (JWT, OAuth2)',
      'Automated API Testing & Docs',
      'Priority 24/7 Developer Support'
    ],
    badge: 'Enterprise Grade'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-info">
          <span className="services-badge">My Services</span>
          <h2 className="services-title">Tailored Solutions for Your Business</h2>
          <p className="services-desc">
            Choose a service plan that matches your project requirements. From modern UI design implementations to robust fullstack platforms, I deliver quality on-time.
          </p>
          <div className="services-info-footer">
            <p className="guarantee">✓ 100% Satisfaction Guarantee</p>
            <p className="guarantee">✓ Direct developer communication</p>
          </div>
        </div>

        <div className="services-cards">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.popular ? 'popular-card' : ''}`}>
              {service.popular && <div className="popular-ribbon">Best Value</div>}
              <div className="card-header">
                <span className="service-badge-tag">{service.badge}</span>
                <h3 className="service-title-text">{service.title}</h3>
                <div className="price-container">
                  <span className="price-num">{service.price}</span>
                  <span className="price-term">/ project</span>
                </div>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <ul className="service-features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-btn">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
