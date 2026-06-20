import React from 'react';
import './AboutSection.css';
import muthuAbout from '../assets/Muthu (About).png';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="image-frame">
            <img src={muthuAbout} alt="Muthu" className="about-image" />
          </div>
        </div>

        <div className="about-right">
          <span className="about-badge">About Me</span>
          <h2 className="about-title">Beyond the Code</h2>
          <p className="about-headline">I design and develop functional, pixel-perfect solutions that solve real-world problems.</p>
          
          <p className="about-text">
            My name is Muthu, a freelance full-stack developer and designer. I specialize in building custom web systems with React, Spring Boot, and MongoDB. I focus on clean architecture, lightning-fast performance, and user-centric designs.
          </p>
          
          <p className="about-text">
            Whether starting from scratch in Figma or optimizing an existing production application, I bring value at every stage of the lifecycle. I value transparency, efficiency, and writing clean, scalable code.
          </p>

          <div className="about-skills-container">
            <h3 className="skills-heading">Core Competencies</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Frontend Architecture</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '95%'}}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Backend & API Design</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">UI/UX Layouts (Figma)</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Database Modeling</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '88%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
