import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section
    id="home"
    className="w-full hero bg-gradient-to-r text-white min-h-screen flex flex-col justify-center items-center relative px-7 py-20"
  >
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left column - Text content */}
      <div className="text-left flex flex-col space-y-6 order-2 md:order-1">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight fadeIn"
          id="heading"
        >
          HELLO I'M C BHUVANESHVAR
          <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold block mt-2">
            REDDY
          </span>
        </h1>

        <p
          className="text-base sm:text-lg slideUp text-neutral-400 max-w-xl font-bold"
          id="normalText"
        >
          I'm a web developer and freelance web designer with experience building responsive, user-focused websites using React, Tailwind CSS, and MongoDB. I've worked with real clients, including e-commerce and portfolio projects, delivering functional and visually appealing websites.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="/C-Bhuvaneshvar-Reddy-Resume.pdf"
            download
            className="px-6 py-3 shadow-md hover:bg-purple-700 transition rounded-full text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-neon hover:shadow-neon-hover text-center"
            id="neon-button"
          >
            DOWNLOAD RESUME
          </a>

          <a 
            href="#work"
            className="px-6 py-3 shadow-md transition rounded-full text-lg font-semibold border-2 border-purple-500 text-white hover:bg-purple-900/30 text-center"
          >
            VIEW MY WORK
          </a>
        </div>
        
        <Link to="/user-form" className="inline-block mt-4">
          <p className="text-purple-300 underline hover:text-purple-100 transition">
            Let's Connect
          </p>
        </Link>
      </div>
      
      {/* Right column - Image */}
      <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-full blur-xl"></div>
          <img
            src="https://mattfarley.ca/img/mf-avatar.svg"
            className="w-48 h-48 sm:w-64 sm:h-64 relative z-10"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </section>
);

export default HeroSection;
