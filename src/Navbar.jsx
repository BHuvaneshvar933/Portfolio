import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className="backdrop-blur-3xl fixed top-0 left-0 w-full z-50 shadow-lg"
      id="navbar"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">

        <div className="text-white text-lg md:text-2xl font-semibold" id="heading">
          {isHome ? (
            <a href="#home">C Bhuvaneshvar Reddy</a>
          ) : (
            <Link to="/">C Bhuvaneshvar Reddy</Link>
          )}
        </div>

        <div className="hidden md:flex space-x-8">
          {isHome ? (
            <a href="#home" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Home
            </a>
          ) : (
            <Link to="/#home" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Home
            </Link>
          )}

          {isHome ? (
            <a href="#about" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"} About
            </a>
          ) : (
            <Link to="/#about" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"} About
            </Link>
          )}

          {isHome ? (
            <a href="#skills" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Skills
            </a>
          ) : (
            <Link to="/#skills" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Skills
            </Link>
          )}

          {isHome ? (
            <a href="#work" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Work
            </a>
          ) : (
            <Link to="/#work" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Work
            </Link>
          )}

          {isHome ? (
            <a href="#experience" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Experience
            </a>
          ) : (
            <Link to="/#experience" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Experience
            </Link>
          )}

          {isHome ? (
            <a href="#contact" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Contact
            </a>
          ) : (
            <Link to="/#contact" className="text-white hover:text-neutral-400 text-sm md:text-lg transition">
              <span className="text-xs"></span> {"//"}Contact
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 bg-opacity-90 absolute top-16 left-0 right-0 z-40 shadow-lg p-6 space-y-6">

          {isHome ? (
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              01 // Home
            </a>
          ) : (
            <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              01 // Home
            </Link>
          )}

          {isHome ? (
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              02 // About
            </a>
          ) : (
            <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              02 // About
            </Link>
          )}

          {isHome ? (
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              03 // Skills
            </a>
          ) : (
            <Link to="/#skills" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              03 // Skills
            </Link>
          )}

          {isHome ? (
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              04 // Work
            </a>
          ) : (
            <Link to="/#work" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              04 // Work
            </Link>
          )}

          {isHome ? (
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              05 // Experience
            </a>
          ) : (
            <Link to="/#experience" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              05 // Experience
            </Link>
          )}

          {isHome ? (
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              06 // Contact
            </a>
          ) : (
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white text-lg transition">
              06 // Contact
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
