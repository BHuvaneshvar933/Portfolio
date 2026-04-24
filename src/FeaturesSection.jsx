import { motion } from "framer-motion";
import { SquareTerminal, Zap, Code2, Database, Layout, Globe } from "lucide-react";
import { FaAndroid } from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';
import coding from "./assets/Coding.mp4";

const FeaturesSection = () => {

  return (
    <section id="expertise" className="py-24 w-full relative overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Web Development Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-border p-10 glass-card flex flex-col h-full justify-between"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="p-5 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                <SquareTerminal className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Web Developer</h3>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                Crafting pixel-perfect, scalable web experiences with a focus on performance and user-centric design.
              </p>
            </div>

            <div className="space-y-10 mt-12">
              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-purple-400 font-bold text-center mb-6">Mastered Tech Stack</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StackItem icon={<Code2 size={18}/>} title="Frontend" items={["React.js", "Next.js", "Tailwind", "TS"]} />
                  <StackItem icon={<Layout size={18}/>} title="Backend" items={["Node.js", "Express", "REST", "WS"]} />
                  <StackItem icon={<Database size={18}/>} title="Data" items={["MongoDB", "Firebase", "SQL"]} />
                  <StackItem icon={<Zap size={18}/>} title="Tools" items={["Git", "Docker", "Vite"]} />
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <SkillBar label="Frontend Architecture" percentage="95%" />
                <SkillBar label="Backend Systems" percentage="85%" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Android & Emerging Tech */}
          <div className="flex flex-col gap-8 h-full">
            {/* Android Development Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-border p-10 glass-card flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-8 mb-8">
                <div className="p-5 bg-green-500/10 rounded-2xl border border-green-500/20 shrink-0">
                  <FaAndroid size={54} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Android Dev</h3>
                  <p className="text-neutral-400 leading-relaxed">Native app development with a focus on smooth UX and robust architecture.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-start">
                {["Kotlin", "Java", "Android SDK", "Jetpack", "Firebase", "SQLite"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-neutral-300 border border-white/10 uppercase tracking-widest">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Emerging Tech Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-border p-10 glass-card overflow-hidden group flex-[1.5] flex flex-col justify-center"
            >
              <div className="flex items-center gap-8 mb-8">
                <div className="p-5 bg-blue-500/10 rounded-2xl border border-blue-500/20 shrink-0">
                  <SiBlockchaindotcom size={48} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Blockchain & AI</h3>
                  <p className="text-neutral-400 leading-relaxed">Exploring the frontier of decentralized systems and intelligence.</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
                <video className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" autoPlay loop muted playsInline>
                  <source src={coding} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <Globe className="text-blue-400 animate-spin-slow" size={20}/>
                  <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Active Research Lab</span>
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
  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all group">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-purple-400 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-bold text-white uppercase tracking-wider">{title}</span>
    </div>
    <div className="flex flex-wrap gap-1">
      {items.map(item => (
        <span key={item} className="text-[10px] text-neutral-500 font-medium">/ {item}</span>
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
