import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/HeroSection.jsx'
import NaveBar from './components/NaveBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NaveBar />
    <HeroSection />
  </StrictMode>,
)
