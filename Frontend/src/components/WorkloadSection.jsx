import './WorkloadSection.css';

const WorkloadSection = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="workload" className="workload-section fade-in">
      <div className="workload-container">
        {/* Header */}
        <div className="workload-header">
          <span className="workload-badge">WORKLOAD</span>
          <h2 className="workload-title">Current Availability</h2>
        </div>

        {/* Cards */}
        <div className="workload-cards">
          {/* Card 1 — Available Slots */}
          <div className="workload-card">
            <div className="workload-card-icon-wrapper">
              <svg className="workload-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h3 className="workload-card-title">Available Slots</h3>
            <p className="workload-card-subtitle">Ready to work</p>
            <div className="workload-status-box">
              <span className="workload-status-label">2 Slots are Available</span>
            </div>
            <div className="workload-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>

          {/* Card 2 — Project working */}
          <div className="workload-card">
            <div className="workload-card-icon-wrapper">
              <svg className="workload-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="workload-card-title">Project working</h3>
            <p className="workload-card-subtitle">Currently in progress</p>
            <div className="workload-status-box">
              <span className="workload-status-label">1 Project working</span>
            </div>
            <div className="workload-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>

          {/* Card 3 — Next available slots */}
          <div className="workload-card">
            <div className="workload-card-icon-wrapper">
              <svg className="workload-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="workload-card-title">Next available slots</h3>
            <p className="workload-card-subtitle">Upcoming availability</p>
            <div className="workload-status-box workload-status-box-date">
              <span className="workload-status-label">18 July 2026</span>
              <span className="workload-status-sublabel">Next slot opens</span>
            </div>
            <div className="workload-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="workload-buttons">
          <a
            href="#contact"
            className="workload-btn workload-btn-primary"
            onClick={(e) => handleClick(e, 'contact')}
          >
            BOOK A SLOT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a
            href="#what-i-build"
            className="workload-btn workload-btn-secondary"
            onClick={(e) => handleClick(e, 'what-i-build')}
          >
            WHAT I BUILD
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkloadSection;
