import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserFormPage from './UserFormPage'; // Import the form page
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

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
            <Footer />
          </>
        } />
        <Route path="/user-form" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
