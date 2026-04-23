import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
    <section
      id="home"
      className="w-full mt-10 hero text-white min-h-[90vh] flex flex-col justify-center items-center relative px-7 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'var(--gradient-mesh)' }}></div>

      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left column - Text content */}
        <div className="text-left flex flex-col space-y-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tighter"
              id="heading"
            >
              HELLO I&apos;M <br />
              <span className="text-white">C BHUVANESHVAR</span>
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text block mt-2 animate-pulse-slow">
                REDDY
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-xl font-medium leading-relaxed"
            id="normalText"
          >
            I architect scalable web and mobile solutions, bridging the gap between elegant design and robust backend systems. Specializing in MERN and Android development with a passion for AI/Web3.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            <a
              href="/resume.pdf"
              download="Bhuvaneshvar_Reddy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center gap-2"
            >
              DOWNLOAD RESUME
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="#work"
              className="px-8 py-4 glass-card rounded-full text-lg font-bold border border-purple-500/30 hover:border-purple-500/60 transition-all hover:bg-white/5"
            >
              VIEW PROJECTS
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/contact" className="inline-flex items-center group">
              <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">Let&apos;s build something great</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right column - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
          <img
            src="https://mattfarley.ca/img/hero-devices.svg"
            className="w-full max-w-lg relative z-10 drop-shadow-2xl brightness-110 contrast-125"
            alt="Development Devices"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
