import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserFormPage from './UserFormPage'; 
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Work from "./Work";
import Experience from "./Experience";

AOS.init();

const App = () => {
  return (
    <Router>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection />
            <Work/>
            <Experience/>
            <Footer />
          </>
        } />
        <Route path="/user-form" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
