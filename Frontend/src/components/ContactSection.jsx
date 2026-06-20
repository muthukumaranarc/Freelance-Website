import React, { useState } from 'react';
import './ContactSection.css';

// Import social assets
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import mail from '../assets/Mail.png';
import whatsapp from '../assets/WhatsApp.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socials = [
    { name: 'Instagram', icon: instagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: linkedin, url: 'https://linkedin.com' },
    { name: 'Email', icon: mail, url: 'mailto:muthu@example.com' },
    { name: 'WhatsApp', icon: whatsapp, url: 'https://wa.me/1234567890' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-badge">Contact</span>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-desc">
            Have a project in mind, or just want to chat? Fill out the form or reach out directly via social networks.
          </p>

          <div className="social-links-grid">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon-wrapper">
                  <img src={social.icon} alt={social.name} className="social-icon-img" />
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Description / Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project details..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {submitted && (
              <div className="success-toast">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
