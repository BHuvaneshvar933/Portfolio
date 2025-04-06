import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section
    id="home"
    className="w-full hero bg-gradient-to-r text-white h-screen flex flex-col justify-center items-center text-center relative px-7 mt-24"
  >
    <h1
      className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 fadeIn"
      id="heading"
    >
      HELLO I'M C BHUVANESHVAR
      <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold">
        {" "}REDDY
      </span>
    </h1>

    <p
      className="text-lg sm:text-xl mb-6 mx-auto slideUp text-center text-neutral-400 max-w-4xl font-bold"
      id="normalText"
    >
      I'm a web developer and freelance web designer with experience building responsive, user-focused websites using React, Tailwind CSS, and MongoDB. I've worked with real clients, including e-commerce and portfolio projects, delivering functional and visually appealing websites. I'm currently seeking a web development internship where I can continue to grow and contribute in a team environment.
    </p>

    {/* Resume Button */}
    <a
  href="/C-Bhuvaneshvar-Reddy-Resume.pdf"
  download
  className="px-4 mt-4 py-3 w-full md:w-40 shadow-md hover:bg-purple-700 transition bg-white rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-neon hover:shadow-neon-hover"
  id="neon-button"
>
  Download Resume
</a>


 
    <img
      src="https://mattfarley.ca/img/mf-avatar.svg"
      className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-40 mt-6"
      alt="Avatar"
    />

    
    <a href="#work">
      <button className="px-4 mt-10 py-3 w-full md:w-40 shadow-md hover:bg-purple-700 transition bg-white rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-neon hover:shadow-neon-hover"
            id="neon-button">
        View My Work
      </button>
    </a>
<Link to="/user-form">
    <a >
      <p className="mt-4 text-purple-300 underline hover:text-purple-100 transition">
        Let’s Connect
      </p>
    </a>
  </Link>
  </section>
);

export default HeroSection;
