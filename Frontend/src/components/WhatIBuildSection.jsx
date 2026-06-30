import './WhatIBuildSection.css';

const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className="what-i-build-section fade-in">
      <div className="wib-container">
        {/* Header */}
        <div className="wib-header">
          <span className="wib-badge">What I Build</span>
          <h2 className="wib-title">I Specialized in</h2>
          <p className="wib-subtitle">Landing pages &amp; Portfolio websites</p>
          <p className="wib-desc">
            I craft high-performance, visually stunning websites tailored to your brand.
            From conversion-focused landing pages to polished portfolio sites —
            every project is built with precision, speed, and modern design principles.
          </p>
        </div>

        {/* Cards */}
        <div className="wib-cards">
          {/* Card 1 — Portfolio Websites */}
          <div className="wib-card">
            <div className="wib-card-icon-wrapper">
              <svg className="wib-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M7 10h.01"/>
                <path d="M12 10h.01"/>
                <path d="M17 10h.01"/>
              </svg>
            </div>
            <h3 className="wib-card-title">Portfolio Websites</h3>
            <p className="wib-card-desc">
              Showcase your work with a stunning, responsive portfolio that 
              highlights your skills, projects, and personal brand.
            </p>
          </div>

          {/* Card 2 — Landing Pages */}
          <div className="wib-card">
            <div className="wib-card-icon-wrapper">
              <svg className="wib-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="wib-card-title">Landing Pages</h3>
            <p className="wib-card-desc">
              High-converting landing pages designed to capture leads, 
              promote your services, and drive business growth.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="wib-buttons">
          <a href="#services" className="wib-btn wib-btn-primary">
            MY SERVICES
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#contact" className="wib-btn wib-btn-secondary">
            PROJECT REVIEW
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
