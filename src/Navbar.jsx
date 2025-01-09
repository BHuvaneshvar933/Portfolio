import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" backdrop-blur-3xl fixed top-0 left-0 w-full z-50 shadow-lg   flex" id="navbar">
      <div className="text-white text-2xl w-2/4 font-semibold  py-6 px-4" id='heading'>C Bhuvaneshvar Reddy</div>
      <div className="container  px-0  py-4 flex ">
        
        <div className="hidden md:flex space-x-9 ml-1"> 
          <a href="#home" className="text-gray-400 hover:text-white text-xl"><h1 className='text-sm ml-12'>01</h1>//Home</a>
          <a href="#features" id="navbuttons" className="text-gray-400 hover:text-white mx-4 text-xl"><h1 className='text-sm ml-16 pl-3'>                   02</h1>//expertise</a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-4 text-xl"><h1 className='text-sm ml-9'>03</h1>//work</a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-4 text-xl"><h1 className='text-sm ml-20 pl-3'>04</h1>//experience</a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-4 text-xl"><h1 className='text-sm ml-14 pl-1'>05</h1>//contact</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 right-0 mt-16 shadow-lg p-4 space-y-4">
          <a href="#home" className="text-gray-800 hover:text-blue-600 block">Home</a>
          <a href="#features" className="text-gray-800 hover:text-blue-600 block">Features</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
