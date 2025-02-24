import React from "react";
import "animate.css";
import { LaptopMinimal, SquareTerminal } from "lucide-react";
import coding from "./assets/Coding.mp4"


const FeaturesSection = () => (
  <>
    <img
      src="https://mattfarley.ca/img/hero-devices.svg"
      className="w-full sm:w-2/3 mx-auto mb-8 mt-20"
      alt="Hero Devices"
    />
    <section id="features" className=" py-20 z-50 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 fadeInBottom"
          id="heading"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          My{" "}
          <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">
            Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm shadow-lg hover:shadow-xl transition hoverShadow border-4 border-neutral-300 rounded-2xl md:rounded-l-2xl"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="flex flex-col items-center space-y-8">
              <LaptopMinimal className="w-16 h-16 lg:w-20 lg:h-20" />
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text text-center">
                Software Development
              </h3>
            </div>
            <div className="text-center">
  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 text-neutral-400">
    On a journey to learning Software Development 🏕️
  </h3>

  <div className="relative w-full max-w-3xl mx-auto">
  <video 
    className="w-full h-96 rounded-lg shadow-lg" 
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src={coding} type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
</div>
</div>
            {/*<div className="slideUp text-center">
              <p className="text-base lg:text-xl mb-8 text-neutral-400">
                I prioritize efficient code architecture, modular design patterns, and intuitive user experiences in software development.
              </p>
              <p className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 font-bold">
                Languages I Speak:
              </p>
              <p className="mb-2 text-neutral-400">Java</p>
              <p className="mb-2 text-neutral-400">Python</p>
              <p className="mb-2 text-neutral-400">C</p>
              <p className="mb-2 text-neutral-400">JavaScript</p>
            </div>*/}
          </div>

          {/* Web Developer Card */}
          <div
            className="flex flex-col space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm shadow-lg hover:shadow-xl transition hoverShadow border-4 border-neutral-300 rounded-2xl md:rounded-r-2xl"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="flex flex-col items-center space-y-8">
              <SquareTerminal className="w-16 h-16 lg:w-20 lg:h-20" />
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text text-center">
                Web Developer
              </h3>
            </div>
            <p className="text-base lg:text-xl py-2 mb-8 text-neutral-400">
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div className="slideUp text-center flex flex-col md:flex-row md:justify-between md:pr-3 space-y-8 md:space-y-0 ">
              <div>
                <p className="bg-gradient-to-br text-2xl from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 font-bold">
                  Languages I Speak:
                </p>
                <p className="mb-2 text-xl text-neutral-400">HTML</p>
                <p className="mb-2 text-xl text-neutral-400">CSS</p>
                <p className="mb-2 text-xl text-neutral-400">Git</p>
                <p className="mb-2 text-xl text-neutral-400">JavaScript</p>
              </div>
              <div>
                <p className="bg-gradient-to-br text-2xl from-purple-300 to-purple-600 text-transparent bg-clip-text mb-2 font-bold">
                  Dev Tools:
                </p>
                <p className="mb-2 text-xl text-neutral-400">Tailwind CSS</p>
                <p className="mb-2 text-xl text-neutral-400">React.js</p>
                <p className="mb-2 text-xl text-neutral-400">Netlify</p>
                <p className="mb-2 text-xl text-neutral-400">Vercel</p>
                <p className="mb-2 text-xl text-neutral-400">VS Code</p>
                <p className="mb-2 text-xl text-neutral-400">GitHub</p>
                <p className="mb-2 text-xl text-neutral-400">Vite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
