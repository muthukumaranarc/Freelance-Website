import { useState, useEffect } from 'react'
import './NaveBar.css'
import logo from '../assets/logo.png'

const NaveBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nave-bar${scrolled ? ' shrunk' : ''}`}>
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logo} alt="Logo" />
            <div className="logo-text">
                <h1>MUTHU</h1>
                <p>Freelancing</p>
            </div>
        </div>
        <div className="nav-links">
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>PROJECTS</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')}>ABOUT</a>
            <a href="#services" onClick={(e) => handleClick(e, 'services')}>SERVICES</a>
            <a href="#reviews" onClick={(e) => handleClick(e, 'reviews')}>REVIEWS</a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>CONTACT</a>
        </div>
        <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, 'contact')}>Let's Talk</a>
    </nav>
  );
};

export default NaveBar;