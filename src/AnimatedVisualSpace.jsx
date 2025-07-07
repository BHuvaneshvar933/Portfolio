import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaAndroid,
  FaApple,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiFlutter,
  SiPostman,
  SiNetlify,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const icons = [
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaAndroid,
  FaApple,
  FaFigma,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiFlutter,
  SiPostman,
  SiNetlify,
  SiRedux,
  SiTypescript,
];

// ✅ Generate random props outside the component so they persist
const fallingIcons = Array.from({ length: 40 }).map((_, i) => {
  const Icon = icons[i % icons.length];
  return {
    Icon,
    left: Math.random() * 100,
    size: Math.random() * 20 + 24,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 3,
    sway: Math.random() * 30 + 10,
    rotate: Math.random() * 30 + 10,
  };
});

const AnimatedVisualSpace = () => {
  return (
    <div className="relative w-full h-[220px] overflow-hidden bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-sm  rounded-xl border border-white shadow-lg">
      {fallingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-white opacity-30"
          initial={{ y: "-10%" }}
          animate={{
            y: "1020%",
            x: [0, icon.sway, -icon.sway, 0],
            rotate: [0, icon.rotate, -icon.rotate, 0],
          }}
          transition={{
            delay: icon.delay,
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${icon.left}%`,
            top: "0%",
            fontSize: `${icon.size}px`,
            pointerEvents: "none",
          }}
        >
          <icon.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedVisualSpace;
