import React from "react";
import "animate.css";
import { LaptopMinimal, SquareTerminal } from "lucide-react";
import { FaAndroid} from 'react-icons/fa'
import { SiBlockchaindotcom } from 'react-icons/si'
import coding from "./assets/Coding.mp4";
import AnimatedVisualSpace from "./AnimatedVisualSpace";

const FeaturesSection = () => (
<> <section id="features" className="py-20  w-full"> <div className="container mx-auto px-4 text-center"> <h2
       className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 fadeInBottom"
       id="heading"
     >
My{" "} <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">
Expertise </span> </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <div className="col-span-1 h-full">
      {/* Web Development Card */}
      <div className="flex flex-col col-span-1 justify-between space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm shadow-lg hover:shadow-xl transition hoverShadow border-4 border-neutral-300 rounded-2xl">
        <div className="flex flex-col items-center space-y-6">
          <SquareTerminal className="w-16 h-16 lg:w-20 lg:h-20" />
          <h3 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text text-center">
            Web Developer
          </h3>
          <p className="text-base lg:text-xl text-neutral-400 text-center px-2">
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
        </div>

        <div className="slideUp text-center mt-6">
          <h4 className="bg-gradient-to-br text-2xl from-purple-300 to-purple-600 text-transparent bg-clip-text mb-6 font-bold">
            My Tech Stack
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Languages</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">HTML</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">CSS</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">JavaScript</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">TypeScript</span>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Frameworks</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">React.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Next.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Node.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Express.js</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Tools</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Git</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">VS Code</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">GitHub</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Vite</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Postman</span>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Databases</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">MongoDB</span>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Deployment</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Netlify</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Vercel</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">Render</span>
              </div>
            </div>

             <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">APIs & Communication</h5>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">REST</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">GraphQL</span>
                <span className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">WebSockets</span>
              </div>
            </div>

            
            
          </div>
          <div className="bg-neutral-900/50 p-4 rounded-lg border mt-5 border-purple-600/30 hover:border-purple-600 transition-colors">
              <h5 className="text-purple-300 font-semibold mb-3">Skill Level</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Frontend</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Backend</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="mt-7 hidden sm:block">
  <AnimatedVisualSpace />
</div>

      </div>
      <div className="col-span-1 grid grid-cols-1 md:grid-cols-1 gap-6">

      {/* App Development Card */}
<div className="flex flex-col justify-between space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm shadow-lg hover:shadow-xl transition hoverShadow border-4 border-neutral-300 rounded-2xl">
  
  {/* Header Section */}
  <div className="flex flex-col items-center space-y-4">
    <FaAndroid size={100} color="white" />
    <h3 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text text-center">
      Android Development
    </h3>
    <p className="text-lg lg:text-xl text-neutral-400 text-center">
      I love building apps from the ground up and take pride in turning ideas into smooth, functional experiences on every device.
    </p>
  </div>

  {/* Stack Section */}
  <div className="text-center space-y-6">
    <h4 className="text-2xl font-bold bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">
      Android Dev Stack
    </h4>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      
      {/* Languages */}
      <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
        <h5 className="text-purple-300 font-semibold mb-3">Languages</h5>
        <div className="flex flex-wrap justify-center gap-2">
          {["Kotlin", "Java", "XML"].map((lang) => (
            <span key={lang} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
        <h5 className="text-purple-300 font-semibold mb-3">Tools</h5>
        <div className="flex flex-wrap justify-center gap-2">
          {["Android SDK", "Android Studio", "Firebase"].map((tool) => (
            <span key={tool} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-neutral-900/50 p-4 rounded-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
        <h5 className="text-purple-300 font-semibold mb-3">Databases</h5>
        <div className="flex flex-wrap justify-center gap-2">
          {["SQLite"].map((tool) => (
            <span key={tool} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>

{/* Blockchain and AI Card */}
<div className="flex flex-col justify-between space-y-8 feature-card p-6 bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm shadow-lg hover:shadow-xl transition hoverShadow border-4 border-neutral-300 rounded-2xl">
  
  {/* Header Section */}
  <div className="flex flex-col items-center space-y-4">
     <SiBlockchaindotcom size={83}  />
    <h3 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text text-center">
      Blockchain and AI
    </h3>
    <p className="text-lg lg:text-xl text-neutral-400 text-center">
      On a journey to learning Blockchain and AI 🏕️
    </p>
  </div>
   <div className="relative w-full max-w-3xl mx-auto">
    <video
      className="w-full h-80 rounded-lg shadow-lg object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={coding} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
  </div>

</div>

</div>
      
    </div>
  </div>
</section>


</>
);

export default FeaturesSection;
