import React from 'react';
import NaveBar from './components/NaveBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhatIBuildSection from './components/WhatIBuildSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import WorkloadSection from './components/WorkloadSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NaveBar />
      <HeroSection />
      <WhatIBuildSection />
      <ProjectsSection />
      <AboutSection />
      <WorkloadSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;