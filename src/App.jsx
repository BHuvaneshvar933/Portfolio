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

AOS.init();

const App = () => {
  return (
    <Router>
      
      <ParticleBackground />
   
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<><HeroSection/><FeaturesSection/><Work/><Experience/></>}/>
         <Route path="/user-form" element={<UserForm/>}/>
      </Routes>
     
      <Footer/>
    </Router>
  );
};

export default App;
