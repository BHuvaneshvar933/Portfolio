import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import resumePDF from './assets/C_Bhuvaneshvar_Reddy.pdf';

const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 30);
    } else {
      setIsComplete(true);
    }
    return () => clearTimeout(timeout);
  }, [displayText, text]);

  return (
    <span className="relative">
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-5 bg-purple-500 ml-1 align-middle"
        />
      )}
    </span>
  );
};

const MagneticButton = ({ children, className, href, download, target, rel, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
};

const HeroSection = () => {
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(resumePDF);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'C_Bhuvaneshvar_Reddy.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the resume:', error);
      // Fallback if fetch fails
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'C_Bhuvaneshvar_Reddy.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
              <span className="text-white glitch block" data-text="C BHUVANESHVAR">C BHUVANESHVAR</span>
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text block mt-2 animate-pulse-slow glitch" data-text="REDDY">
                REDDY
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-xl font-medium leading-relaxed font-mono"
            id="normalText"
          >
            <Typewriter text="I'm a software engineer passionate about building scalable web and mobile solutions. Specializing in MERN and Android development with a strong focus on building great user experiences." />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            <MagneticButton
              href={resumePDF}
              download="C_Bhuvaneshvar_Reddy.pdf"
              onClick={handleDownload}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center gap-2 neon-pulse"
            >
              DOWNLOAD RESUME
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </MagneticButton>

            <a
              href="#work"
              className="px-8 py-4 glass-card rounded-full text-lg font-bold border border-purple-500/30 hover:border-purple-500/60 transition-all hover:bg-white/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
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

        {/* Right column - Visual with Floating Icons & Cyber HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative order-1 md:order-2 flex justify-center items-center"
        >
          {/* Cyber HUD Layers */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[120%] h-[120%] border border-purple-500/10 rounded-full hud-rotate" />
            <div className="absolute w-[100%] h-[100%] border border-dashed border-purple-500/20 rounded-full hud-rotate-reverse" />
            <div className="absolute w-[80%] h-[80%] border-2 border-purple-500/5 rounded-full" />
          </div>

          {/* Floating Tech Bits */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-500/20 text-4xl font-mono pointer-events-none select-none z-0"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`
              }}
            >
              {['{ }', '</>', '01', '10', '[ ]'][i]}
            </motion.div>
          ))}

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
