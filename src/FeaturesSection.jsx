import React from "react";
import 'animate.css';
import { LaptopMinimal,SquareTerminal } from 'lucide-react';
const FeaturesSection = () => (
  <>
  <img src="https://mattfarley.ca/img/hero-devices.svg" className="w-2/3 ml-64" />
  <section id="features" className="py-20 z-50">
    <div className="container mx-auto text-center">
 
      
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 fadeInBottom" id="heading" data-aos="fade-up" data-aos-duration="2000">
        My <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">Expertise</span>
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2">
        <div className="flex  flex-col space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm   shadow-lg hover:shadow-xl transition hoverShadow border border-x-neutral-300 rounded-l-2xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col  items-center space-y-8">
          <LaptopMinimal className="w-20 h-16"/>
         
          <h3 className="text-3xl font-semibold mb-3 bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text text-left">
          
          Software
          Development
          </h3>
          </div>
          <div className="slideUp text-center  ">
            <p className=" text-xl mb-8">I prioritize efficient code architecture, modular design patterns, and intuitive user experiences in software development.</p>
               <p className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 ">Languages I Speak:</p>
               <p className="mb-2">Java</p>
               <p className="mb-2">Python</p>
               <p className="mb-2">C</p>
               <p className="mb-2">JavaScript</p>
          </div>
          
        </div>
        <div className="flex  flex-col space-y-8 feature-card p-6 bg-gradient-to-br bg-opacity-10 from-neutral-950 to-neutral-900 rounded-r-2xl backdrop-blur-sm   shadow-lg hover:shadow-xl transition hoverShadow border border-x-neutral-300" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col  items-center space-y-8">
        <SquareTerminal className="w-20 h-16"/>
          <h3 className="text-3xl font-semibold mb-3 bg-gradient-to-br from-purple-400 to-purple-700 text-transparent bg-clip-text text-left">
            Web Developer
          </h3>
          </div>
          <div className="slideUp text-center  ">
            <p className=" text-xl mb-8">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
               <p className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 ">Languages I Speak:</p>
               <p className="mb-2">HTML</p>
               <p className="mb-2">CSS</p>
               <p className="mb-2">Git</p>
               <p className="mb-2">Sass</p>
               <p className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 mt-4 ">Dev Tools:</p>
               <p className="mb-2">Tailwind CSS</p>
               <p className="mb-2">Netlify</p>
               <p className="mb-2">Vercel</p>
               <p className="mb-2">VS Code</p>
               <p className="mb-2">GitHub</p>
               <p className="mb-2">Vite</p>
          </div>
          
        </div>
        
      </div>
    </div>
  </section>
  </>
);

export default FeaturesSection;
