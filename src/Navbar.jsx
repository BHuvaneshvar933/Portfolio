import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="backdrop-blur-3xl fixed top-0 left-0 w-full z-50 shadow-lg"
      id="navbar"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
      
        <div
          className="text-white text-lg md:text-2xl font-semibold"
          id="heading"
        >
          <a href="#">C Bhuvaneshvar Reddy</a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <h1 className="text-xs">01</h1> //Home
          </a>
          <a
            href="#features"
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <h1 className="text-xs">02</h1> //Expertise
          </a>
          <a
            href="#work"
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <h1 className="text-xs">03</h1> //Work
          </a>
          <a
            href="#experience"
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <h1 className="text-xs">04</h1> //Experience
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <h1 className="text-xs">05</h1> //Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i
              className={`fas ${
                isMenuOpen ? "fa-times" : "fa-bars"
              } text-2xl`}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 bg-opacity-90 absolute top-16 left-0 right-0 z-40 shadow-lg p-6 space-y-6">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            01 // Home
          </a>
          <a
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            02 // Expertise
          </a>
          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            03 // Work
          </a>
          <a
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            04 // Experience
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            05 // Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
