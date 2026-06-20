import './HeroSection.css'
import muthu from "../assets/Muthu (Hero).png"
import figma from "../assets/Figma.png"
import mangoDB from "../assets/MangoDB.png"
import reactJS from "../assets/React.png"
import springBoot from "../assets/SpringBoot.png"

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section fade-in">
      <div className="hero-content">
        <div className='hero-left'>
          <h1>Transforming Your Ideas into Powerful</h1>
          <div className="highlight-wrapper">
            <span className="highlight-text">Web Solutions</span>
          </div>
          <p className="hero-desc">I build modern websites and web applications that help businesses grow, attract customers, and create a strong online presence.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Start a Project</a>    
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="hero-features">
            <span>✓ Responsive Design</span>
            <span>✓ Fast Delivery</span>
            <span>✓ Modern UI/UX</span>
            <span>✓ Full-Stack Solutions</span>
          </div>
        </div>

        <div className='hero-right'>
          <div className='hero-image-container'>
            <div className='hero-back'/>
            <img src={muthu} alt="Muthu" className="hero-img" />
            
            {/* Tech Stack Floating Badges */}
            <div className="floating-badge badge-figma" title="Figma">
              <img src={figma} alt="Figma" />
            </div>
            <div className="floating-badge badge-mongodb" title="MongoDB">
              <img src={mangoDB} alt="MongoDB" />
            </div>
            <div className="floating-badge badge-react" title="React">
              <img src={reactJS} alt="React" />
            </div>
            <div className="floating-badge badge-springboot" title="SpringBoot">
              <img src={springBoot} alt="SpringBoot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;