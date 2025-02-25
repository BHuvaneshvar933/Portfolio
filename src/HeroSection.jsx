import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => (
  <section
    id="home"
    className=" w-full hero bg-gradient-to-r text-white h-screen flex flex-col justify-center items-center text-center relative px-4"
  >
    <h1
      className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 fadeIn"
      id="heading"
    >
      C BHUVANESHVAR
      <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold">
        {" "}
        REDDY
      </span>
    </h1>
    <p
      className="text-lg sm:text-xl mb-8 mx-auto slideUp text-center text-neutral-400 max-w-4xl font-bold"
      id="normalText"
    >
      I'm a CSE Student at Cambridge Institute of Technology specializing in Software and Web Development
      <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text"></span>
    </p>
    <img
      src="https://mattfarley.ca/img/mf-avatar.svg"
      className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-40"
      alt="Avatar"
    />
    
    <a href="#work">
      <div className="scroll-indicator absolute top-28 md:top-34 mb-24 bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold ">
      <p>My work</p>
      </div>
    </a>
   
  </section>
);

export default HeroSection;
