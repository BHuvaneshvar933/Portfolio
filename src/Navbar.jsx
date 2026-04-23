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
          <Link
            to={isHome ? "#home" : "/#home"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">01</span> {"//"}Home
          </Link>
          <Link
            to={isHome ? "#about" : "/#about"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">02</span> {"//"} About
          </Link>
          <Link
            to={isHome ? "#features" : "/#features"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">03</span> {"//"}Expertise
          </Link>
          <Link
            to={isHome ? "#work" : "/#work"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">04</span> {"//"}Work
          </Link>
          <Link
            to={isHome ? "#experience" : "/#experience"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">05</span> {"//"}Experience
          </Link>
          <Link
            to={isHome ? "#contact" : "/#contact"}
            className="text-white hover:text-neutral-400 text-sm md:text-lg transition"
          >
            <span className="text-xs">06</span> {"//"}Contact
          </Link>
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

          <Link
            to={isHome ? "#home" : "/#home"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            01 // Home
          </Link>

          <Link
            to={isHome ? "#about" : "/#about"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            02 // About
          </Link>

          <Link
            to={isHome ? "#features" : "/#features"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            03 // Expertise
          </Link>

          <Link
            to={isHome ? "#work" : "/#work"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            04 // Work
          </Link>

          <Link
            to={isHome ? "#experience" : "/#experience"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            05 // Experience
          </Link>

          <Link
            to={isHome ? "#contact" : "/#contact"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white text-lg transition"
          >
            06 // Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
