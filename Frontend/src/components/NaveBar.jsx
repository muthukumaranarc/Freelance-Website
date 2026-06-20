import './NaveBar.css'
import logo from '../assets/logo.png'

const NaveBar = () => {
  return (
    <nav className="nave-bar">
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logo} alt="Logo" />
            <div className="logo-text">
                <h1>MUTHU</h1>
                <p>Freelancing</p>
            </div>
        </div>
        <div className="nav-links">
            <a href="#projects">PROJECTS</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#contact">CONTACT</a>
        </div>
        <a href="#contact" className="nav-cta">Let's Talk</a>
    </nav>
  );
};

export default NaveBar;