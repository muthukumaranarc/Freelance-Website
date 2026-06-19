import './NaveBar.css'
import logo from '../assets/logo.png'

const NaveBar = () => {
  return (
    <nav className="nave-bar">
        <div className="logo">
            <img src={logo} alt="Logo" />
            <div className="logo-text">
                <h1>MUTHU</h1>
                <p>Freelanceing</p>
            </div>
        </div>
        <a href="#home">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICE</a>
        <a href="#portfolio">REVIEW</a>
        <a href="#contact">CONTACT</a>
    </nav>
  );
};

export default NaveBar;