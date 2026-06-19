import './HeroSection.css'
import muthu from "../assets/Muthu (Hero).png"
import figma from "../assets/Figma.png"
import mangoDB from "../assets/MangoDB.png"
import reactJS from "../assets/React.png"
import springBoot from "../assets/SpringBoot.png"

const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className='hero-left'>
        <h1>Transforming Your Ideas into Powerful</h1>
        <div>
          <p>Web Solutions</p>
        </div>
        <p>I build modern websites and web applications that helps businesses grow, customers, and create a strong online presence.</p>
        <button>Start a Project</button>    
        <button>View My Work</button>
        <p>✓ Responsive Design</p>
        <p>✓ Fast Delevery</p>
        <p>✓ Modern UI/UX</p>
        <p>✓ Full-Stack Solutions</p>
      </div>

      <div className='hero-right'>
          <div className='hero-image'>
            <img src={muthu} alt="Muthu" />
            <div className='hero-back'/>
          </div>
          
          <div className='hero-tech'>
            <div><img src={figma} alt="Figma" /></div>
            <div><img src={mangoDB} alt="MangoDB" /></div>
            <div><img src={reactJS} alt="ReactJS" /></div>
            <div><img src={springBoot} alt="SpringBoot" /></div>
          </div>
        <div className='hero-bottom' />   
      </div>
    </div>
  );
};

export default HeroSection;