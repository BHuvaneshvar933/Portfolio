import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './UserFormPage'; 
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Work from "./Work";
import Experience from "./Experience";
import Sidebar from "./Sidebar"

AOS.init({
  // Global AOS settings for consistent animations
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 50,
});

const App = () => {
  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ParticleBackground />
      <Navbar />
      <Sidebar />
      <main id="main-content" className="page-container">
        <Routes>
          <Route path="/" element={<><HeroSection/><FeaturesSection/><Work/><Experience/></>}/>
          <Route path="/user-form" element={<UserForm/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
