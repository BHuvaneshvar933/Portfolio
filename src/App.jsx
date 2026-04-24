import { useEffect } from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './UserFormPage'; 
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import Work from "./Work";
import Experience from "./Experience";
import Sidebar from "./Sidebar"
import AboutMe from "./aboutMe";
import DeveloperStats from "./DeveloperStats";
import ScrollToHash from "./ScrollToHash";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ParticleBackground />
      <div className="noise-overlay"></div>
      <Navbar />
      <Sidebar />
      <main id="main-content" className="page-container relative z-10 text-white">
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <div className="circuit-divider" />
            <AboutMe />
            <div className="circuit-divider" />
            <DeveloperStats />
            <div className="circuit-divider" />
            <FeaturesSection />
            <div className="circuit-divider" />
            <Work />
            <div className="circuit-divider" />
            <Experience />
          </>} />
          <Route path="/contact" element={<UserForm/>}/>
          <Route path="/user-form" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
