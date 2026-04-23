import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Plus, Minus } from "lucide-react";
import vreality from "./assets/vreality.webp";
import chat from "./assets/chat.webp";
import gym from "./assets/Products1_page.webp";
import recipesauce from "./assets/recipesauce.webp";
import home from "./assets/home_page.webp";
import air from "./assets/book.png";
import event from "./assets/event.webp";
import xo from "./assets/xo.jpeg";
import todo from "./assets/todo.png";
import coffee from "./assets/coffee.png";
import capsule from "./assets/capsule.png";

const projects = [
  {
    slug: "capsule",
    title: "Capsule - All-in-one Personal Tracking & Productivity Hub",
    description: "Track EVERYTHING about your productivity and professional life in ONE place",
    Tech_Stack: ["Tailwind", "PWA", "MERN"],
    image: capsule,
    demo: "https://interview-tracker-smoky.vercel.app/",
    link: "https://github.com/BHuvaneshvar933/Capsule",
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
    slug: "airbnb-clone",
    title: "Airbnb Clone",
    description: "Full-stack feed and booking system with secure user authentication.",
    Tech_Stack: ["React", "Express", "MongoDB"],
    image: air,
    demo: "https://abproject-sclone.vercel.app/",
    link: "https://github.com/BHuvaneshvar933/AirBnb_clone",
    domain: "Web development",
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Hub",
    description: "Modern store platform with advanced cart logic and product catalog.",
    Tech_Stack: ["React", "Node.js", "MongoDB"],
    image: gym,
    demo: "https://gymstore2.vercel.app",
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
            FEATURED <span className="text-purple-500">PROJECTS</span>
          </h2>
          <div className="flex justify-center gap-2 mb-10">
            {["All", "Web development", "App development"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === category
                    ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-white/5 text-neutral-500 hover:bg-white/10 hover:text-neutral-300"
                  }`}
              >
                {category.split(" ")[0]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group glow-border overflow-hidden glass-card"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
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

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 bg-purple-500/10 px-2 py-1 rounded">
                      {project.domain === "Web development" ? "Web" : "App"}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.Tech_Stack.map(tech => (
                      <span key={tech} className="text-[9px] font-bold text-neutral-500 uppercase tracking-tighter">
                        # {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
