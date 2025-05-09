import React from "react";
import { Calendar, Briefcase, Rocket, Code } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center" id="heading">
          My{" "}
          <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-purple-600"></div>

          {/* Freelancing Experience */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 shadow-lg shadow-purple-500/50 z-10 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:mr-auto">
                <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 rounded-xl shadow-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">
                      Freelance Web Developer
                    </h3>
                    <span className="text-neutral-400 flex items-center mt-2 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      2024 - Present
                    </span>
                  </div>
                  
                  <p className="text-neutral-300 mb-4 text-left md:text-right">
                    I have successfully completed five freelance projects in web development, delivering custom websites for clients including a gym e-commerce platform and a photography portfolio. My work involved both frontend and backend development using technologies like React.js, Tailwind CSS, Node.js, and MongoDB. These projects helped me enhance my skills, meet client expectations, and manage real-world deadlines effectively.
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="text-purple-400 font-semibold mb-2 text-left md:text-right">Key Projects:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-neutral-300 text-left md:text-right">Gym E-commerce Platform with product management and payment integration</span>
                        <Code size={16} className="mr-2 md:ml-2 md:mr-0 mt-1 text-purple-500 flex-shrink-0" />
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-neutral-300 text-left md:text-right">Photography Portfolio with gallery and booking system</span>
                        <Code size={16} className="mr-2 md:ml-2 md:mr-0 mt-1 text-purple-500 flex-shrink-0" />
                      </li>
                      <li className="flex items-start md:flex-row-reverse">
                        <span className="text-neutral-300 text-left md:text-right">Personal portfolio websites with custom animations</span>
                        <Code size={16} className="mr-2 md:ml-2 md:mr-0 mt-1 text-purple-500 flex-shrink-0" />
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-purple-400 font-semibold mb-2 text-left md:text-right">Skills Applied:</h4>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">React.js</span>
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Node.js</span>
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">MongoDB</span>
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">Responsive Design</span>
                      <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">API Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Astra Experience */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 shadow-lg shadow-purple-500/50 z-10 flex items-center justify-center">
                <Rocket size={16} className="text-white" />
              </div>

              {/* Content card */}
              <div className="ml-12 md:ml-auto md:w-1/2 md:pl-8">
                <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 rounded-xl shadow-lg border border-purple-600/30 hover:border-purple-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">
                      Ad Astra
                    </h3>
                    <span className="text-neutral-400 flex items-center mt-2 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      2024 - Present
                    </span>
                  </div>
                  
                  <p className="text-neutral-300 mb-4">
                    As a member of Ad Astra, I've been involved in developing innovative web solutions and collaborating with a team of talented developers. This experience has enhanced my teamwork skills and deepened my technical knowledge.
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Contributions:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 mt-1 text-purple-500 flex-shrink-0" />
                        <span className="text-neutral-300">Collaborated on team projects with agile methodology</span>
                      </li>
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 mt-1 text-purple-500 flex-shrink-0" />
                        <span className="text-neutral-300">Participated in code reviews and technical discussions</span>
                      </li>
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 mt-1 text-purple-500 flex-shrink-0" />
                        <span className="text-neutral-300">Contributed to open-source initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
