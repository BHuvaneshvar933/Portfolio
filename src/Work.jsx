import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, Plus, Minus } from "lucide-react";
import vreality from "./assets/vreality.webp";
import chat from "./assets/chat.webp";
import recipesauce from "./assets/recipesauce.webp";
import home from "./assets/home_page.webp";
import air from "./assets/book.png";
import event from "./assets/event.png";
import xo from "./assets/xo.jpeg";
import todo from "./assets/todo.png";
import coffee from "./assets/coffee.png";
import capsule from "./assets/capsule.png";
import gym from "./assets/gym.png";
import nexus from "./assets/nexus.png";
import projectforge from "./assets/projectforge.png";

const projects = [
  {
    slug: "capsule",
    title: "Capsule - All-in-one Personal Tracking & Productivity Hub",
    description: "Track EVERYTHING about your productivity and professional life in ONE place",
    Tech_Stack: ["Tailwind", "PWA", "MERN"],
    image: capsule,
    demo: "https://capsulehq.tech/",
    link: "https://github.com/BHuvaneshvar933/Capsule",
    domain: "Web development",
  },
  {
    slug: "nexusflow",
    title: "NexusFlow",
    description: "Self-hosted, scalable workflow automation engine and integration platform with a visual builder.",
    Tech_Stack: ["React", "Node.js", "Prisma"],
    image: nexus,
    demo: "https://nexus-flow-psi.vercel.app/",
    link: "https://github.com/BHuvaneshvar933/NexusFlow",
    domain: "Web development",
  },
  {
    slug: "projectforge",
    title: "ProjectForge",
    description: "A comprehensive platform for building teams, managing projects, and seamless collaboration.",
    Tech_Stack: ["React", "Node.js", "Socket.io"],
    image: projectforge,
    link: "https://github.com/BHuvaneshvar933/ProjectForge",
    domain: "Web development",
  },
  {
    slug: "event-management",
    title: "Event Management System",
    description: "Complete event registration platform with QR check-in and admin analytics.",
    Tech_Stack: ["React", "Tailwind", "MongoDB"],
    image: event,
    demo: "https://event-management-dusky.vercel.app",
    link: "https://github.com/BHuvaneshvar933/Event-Management",
    domain: "Web development",
  },
  {
    slug: "recipe-sauce",
    title: "RecipeSauce",
    description: "Dynamic recipe search engine fetching thousands of culinary instructions via API.",
    Tech_Stack: ["React", "Rest API", "Tailwind"],
    image: recipesauce,
    demo: "https://recipe-sauce.vercel.app",
    link: "https://github.com/BHuvaneshvar933/RecipeSauce",
    domain: "Web development",
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Hub",
    description: "Modern store platform with advanced cart logic and product catalog.",
    Tech_Stack: ["React", "Node.js", "MongoDB"],
    image: gym,
    demo: "https://gymstore3.vercel.app/",
    link: "https://github.com/BHuvaneshvar933/gymstore3",
    domain: "Web development",
  },
  {
    slug: "photography-portfolio",
    title: "Creative Portfolio",
    description: "Minimalist showcase for high-resolution visual storytelling.",
    image: home,
    Tech_Stack: ["HTML", "JavaScript", "GSAP"],
    demo: "https://photography-portfolio-ebon-seven.vercel.app",
    link: "https://github.com/BHuvaneshvar933/Photography_portfolio",
    domain: "Web development",
  },
  {
    slug: "vr-landing-page",
    title: "VR Product Showcase",
    description: "Immersive landing page highlighting high-end virtual reality hardware.",
    Tech_Stack: ["React", "Framer Motion"],
    image: vreality,
    demo: "https://v-reality-azure.vercel.app",
    link: "https://github.com/BHuvaneshvar933/vreality",
    domain: "Web development",
  },
  {
    slug: "tic-tac-toe-android",
    title: "Tic-Tac-Toe Native",
    description: "Classic strategy game built natively for Android with Kotlin.",
    Tech_Stack: ["Kotlin", "Android SDK", "XML"],
    image: xo,
    link: "https://github.com/BHuvaneshvar933/tic-tac-toe-kotlin",
    domain: "App development",
  },
  {
    slug: "coffee-shop-app",
    title: "Coffee Shop Experience",
    description: "Elegant food delivery app with Firebase integration and cart logic.",
    Tech_Stack: ["Kotlin", "Firebase", "Jetpack"],
    image: coffee,
    link: "https://github.com/BHuvaneshvar933/coffee_shop_app_kotlin",
    domain: "App development",
  }
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group glow-border overflow-hidden glass-card relative cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {/* Cyber Scanning Line */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[scan_3s_linear_infinite]"></div>
        </div>

        <div className="relative aspect-video overflow-hidden bg-neutral-900">
          {/* Digital Glitch Overlay */}
          <div className="image-glitch-overlay" />

          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-30">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 bg-purple-600 rounded-full hover:scale-110 transition-transform">
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
            <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:scale-110 transition-transform">
              <Github size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div className="p-6 relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 bg-purple-500/10 px-2 py-1 rounded">
              {project.domain === "Web development" ? "Web" : "App"}
            </span>
          </div>
          <p className="text-neutral-400 text-sm mb-6 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.Tech_Stack.map(tech => (
              <motion.span
                key={tech}
                className="text-[9px] font-bold text-neutral-500 uppercase tracking-tighter"
                whileHover={{ color: "#a855f7", scale: 1.1 }}
              >
                # {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Holographic Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.domain === activeCategory);

  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tighter" id="heading">
            FEATURED <span className="text-purple-500 glitch" data-text="PROJECTS">PROJECTS</span>
          </h2>
          <div className="flex justify-center gap-2 mb-10">
            {["All", "Web development", "App development"].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === category
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] neon-pulse"
                  : "bg-white/5 text-neutral-500 hover:bg-white/10 hover:text-neutral-300"
                  }`}
              >
                {category.split(" ")[0]}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-purple-600 hover:border-purple-500 transition-all group"
          >
            {showMore ? <Minus size={16} /> : <Plus size={16} />}
            {showMore ? "Show Less" : "Explore More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
