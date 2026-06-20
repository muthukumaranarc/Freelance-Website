import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <div className="footer-logo-text">
              <h2>MUTHU</h2>
              <p>Freelancing</p>
            </div>
          </div>
          <p className="footer-motto">
            Crafting scalable fullstack solutions and intuitive user designs to grow your online footprint.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muthu Freelancing. All rights reserved.</p>
        <p>Designed and Built with React &amp; Spring Boot</p>
      </div>
    </footer>
  );
};

export default Footer;
