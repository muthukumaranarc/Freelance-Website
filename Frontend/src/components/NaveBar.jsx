import './NaveBar.css'
import logo from '../assets/logo.png'

const NaveBar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>PROJECTS</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>ABOUT</a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')}>SERVICES</a>
            <a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')}>REVIEWS</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT</a>
        </div>
        <a href="#contact" className="nav-cta" onClick={(e) => handleScroll(e, 'contact')}>Let's Talk</a>
    </nav>
  );
};

export default NaveBar;