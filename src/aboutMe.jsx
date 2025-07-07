import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-neutral-950 text-white">
        <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-full blur-xl"></div>
          <img
            src="https://mattfarley.ca/img/mf-avatar.svg"
            className="w-48 h-48 sm:w-64 sm:h-64 relative z-10"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-5xl ">
        <h2 className="text-4xl text-center sm:text-5xl font-bold mb-8 bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>

       <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6">
  Hey! I'm <span className="font-semibold text-purple-400">C Bhuvaneshvar Reddy</span>, a driven and adaptable developer currently pursuing my B.E. in Computer Science. I specialize in building responsive, full-stack web applications using the <span className="text-purple-400">MERN stack</span>, with a portfolio of real-world projects delivered through freelancing and personal exploration.
</p>

<p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6">
  My journey began with web development, and I've since expanded into <span className="text-purple-400">Android app development</span> and backend systems using <span className="text-purple-400">Java</span>, currently diving into <span className="text-purple-400">Spring Boot</span>. I’ve worked with clients to turn ideas into production-ready solutions—learning to adapt, solve problems, and ship features under real-world constraints.
</p>

<p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6">
  I’m exploring advanced technologies like <span className="text-purple-400">WebSockets</span> for real-time communication, <span className="text-purple-400">blockchain (EVM & smart contracts)</span> for decentralized systems, and <span className="text-purple-400">AI integration</span> for building smarter applications.
</p>

<p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
  My long-term goal is to combine the power of <span className="text-purple-400">web, mobile, blockchain, and AI</span> to build scalable, future-focused applications that solve meaningful problems. I'm constantly evolving as a developer, committed to mastering the full development lifecycle—from frontend to backend, logic to deployment.
</p>


      </div>
    </section>
  );
};

export default AboutMe;
