import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard breakpoint for mobile
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide sidebar on contact form page
  useEffect(() => {
    setShowSidebar(location.pathname !== '/user-form');
  }, [location]);

  // Hide sidebar when scrolled to footer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Check if footer is visible
      const footer = document.getElementById('contact');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollThreshold = footerPosition - windowHeight;
        
        if (position > scrollThreshold) {
          setShowSidebar(false);
        } else {
          setShowSidebar(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Don't render sidebar if on mobile or if it should be hidden
  if (isMobile || !showSidebar) return null;

  return (
    <div className="fixed top-1/3 flex flex-col gap-3 z-50 animate-neon-glow rounded-e-xl p-2" id="neon">
      <a
        href="https://www.linkedin.com/in/c-bhuvaneshvar-reddy-01b985279/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <Linkedin
          size={30}
          className="text-blue-500 hover:scale-110 transition-transform"
        />
      </a>
      <div className="border-b-2"></div>
      <a
        href="https://github.com/BHuvaneshvar933"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <Github
          size={30}
          className="text-white hover:scale-110 transition-transform"
        />
      </a>
      <div className="border-b-2"></div>
      <a
        href="https://www.instagram.com/bhuvan_054/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
      >
        <Instagram
          size={30}
          className="text-pink-500 hover:scale-110 transition-transform"
        />
      </a>
      <div className="border-b-2"></div>
      <a
        href="https://x.com/C_Bhuvaneshvar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Profile"
      >
        <Twitter
          size={30}
          className="text-sky-400 hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default Sidebar;
