import { motion } from "framer-motion";
import { SquareTerminal, Zap, Code2, Database, Layout, Globe, BrainCircuit, Server, Terminal } from "lucide-react";
import { FaAndroid } from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';
import coding from "./assets/Coding.mp4";

const FeaturesSection = () => {

  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4" id="heading">
            MY <span className="text-purple-500 glitch" data-text="EXPERTISE">EXPERTISE</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Top Row: Backend Developer & Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-border p-10 glass-card w-full"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side: Role and Info */}
              <div className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-8 lg:w-1/3 shrink-0">
                <div className="p-5 bg-purple-500/10 rounded-2xl border border-purple-500/20 inline-flex">
                  <SquareTerminal className="w-16 h-16 text-purple-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Backend Developer</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Building scalable architectures, real-time systems, and practical AI integrations with a focus on reliability.
                </p>
                <div className="w-full pt-4 space-y-6">
                  <SkillBar label="Backend Engineering" percentage="95%" />
                  <SkillBar label="System Architecture" percentage="90%" />
                </div>
              </div>

              {/* Right Side: Mastered Tech Stack */}
              <div className="lg:w-2/3 w-full flex flex-col justify-center">
                <h4 className="text-xs uppercase tracking-[0.3em] text-purple-400 font-bold mb-6 text-center lg:text-left">Mastered Tech Stack</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <StackItem icon={<Terminal size={18} />} title="Languages" items={["JavaScript", "TypeScript", "Java", "Python", "Kotlin", "SQL", "HTML"]} />
                  <StackItem icon={<Server size={18} />} title="Backend" items={["Node.js", "Express.js", "Spring Boot", "Socket.io", "REST APIs", "JWT"]} />
                  <StackItem icon={<Layout size={18} />} title="Frontend" items={["React", "Next.js", "Tailwind CSS", "PWA", "Service Workers", "GSAP", "Framer Motion"]} />
                  <StackItem icon={<Database size={18} />} title="Databases" items={["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Prisma", "Firebase"]} />
                  <StackItem icon={<Zap size={18} />} title="DevOps & Tools" items={["Git", "GitHub", "Docker", "Linux", "Vercel", "Railway", "Vite", "Postman"]} />
                  <StackItem icon={<FaAndroid size={18} />} title="Mobile" items={["Android SDK", "Jetpack", "XML"]} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: AI & Emerging Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* AI & Machine Learning Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-border p-10 glass-card flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-8 mb-8">
                <div className="p-5 bg-green-500/10 rounded-2xl border border-green-500/20 shrink-0">
                  <BrainCircuit size={54} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">AI Integration</h3>
                  <p className="text-neutral-400 leading-relaxed">Implementing practical AI capabilities using modern LLMs for intelligent applications.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-start">
                {["OpenAI", "Google Gemini", "Prompt Engineering", "Machine Learning", "LLM APIs", "Python"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-full text-xs font-bold text-neutral-300 border border-white/10 uppercase tracking-widest">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Exploring Next Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-border glass-card overflow-hidden group flex flex-col relative min-h-[350px] p-10"
            >
              {/* Background Video */}
              <div className="absolute inset-0 z-0">
                <video className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" autoPlay loop muted playsInline>
                  <source src={coding} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/90 group-hover:from-blue-900/40 group-hover:via-black/40 group-hover:to-purple-900/40 transition-all duration-1000"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-8 mb-8">
                  <div className="p-5 bg-blue-500/20 backdrop-blur-md rounded-2xl border border-blue-500/30 shrink-0 shadow-lg">
                    <Server size={48} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Exploring Next</h3>
                    <p className="text-neutral-300 leading-relaxed font-medium drop-shadow-lg">Diving deeper into advanced system design, Web3 architectures, and cutting-edge AI.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <Globe className="text-blue-400 animate-spin-slow drop-shadow-lg" size={20} />
                  <span className="text-xs font-black text-white uppercase tracking-[0.3em] drop-shadow-lg">Continuous Learning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StackItem = ({ icon, title, items }) => (
  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all group flex flex-col h-full">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-purple-400 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-bold text-white uppercase tracking-wider">{title}</span>
    </div>
    <div className="flex flex-wrap gap-1.5 mt-2">
      {items.map(item => (
        <span key={item} className="text-xs text-neutral-300 font-bold bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillBar = ({ label, percentage }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
      <span>{label}</span>
      <span>{percentage}</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: percentage }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
      />
    </div>
  </div>
);

export default FeaturesSection;
