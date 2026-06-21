import React from 'react';
import './AboutSection.css';
import muthuAbout from '../assets/Muthu (About).png';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-wrapper">
            <div className="about-bg-circle"></div>
            <img src={muthuAbout} alt="Muthu" className="about-image" />
          </div>
        </div>

        <div className="about-right">
          <span className="about-label">ABOUT</span>
          <h2 className="about-title">Beyond the Code</h2>
          
          <p className="about-text">
            I'm Muthukumaran, a passionate Full-Stack Developer focused on building impactful digital experiences with Spring Boot, React, and modern technologies.
          </p>
          
          <p className="about-text">
            My journey started with curiosity and grew into a mission to create solutions that solve real-world problems. From designing intuitive interfaces to building scalable backend systems, I enjoy turning ideas into functional products.
          </p>

          <p className="about-text">
            Beyond development, I'm deeply interested in AI, product building, freelancing, and continuous self-growth. I believe technology is not just about writing code - it's about creating meaningful experiences that make life better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
