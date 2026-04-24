import { motion } from "framer-motion";
import { Calendar, Briefcase, Rocket, Code2, CheckCircle2, Sparkles, Orbit } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Ad Astra Member",
      date: "2024 - Present",
      description: "Collaborating with a high-performance team to build innovative software solutions. Participating in agile sprints and technical architectural planning.",
      icon: <Rocket size={24} />,
      color: "purple",
      projects: [
        "Agile team collaborations",
        "Open-source contributions",
        "Technical code reviews",
        "System architecture design"
      ],
      skills: ["Agile", "GitHub Actions", "Architecture", "Teamwork", "MERN Stack"]
    }
  ];

  return (
    <section id="experience" className="py-24 w-full relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Floating Space Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          animate={{
            x: [Math.random() * 1000, Math.random() * 1000],
            y: [Math.random() * 1000, Math.random() * 1000],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight" id="heading">
            Work <span className="text-purple-500 glitch" data-text="History">History</span>
          </h2>
          <p className="text-neutral-500 font-medium max-w-lg mx-auto">My professional journey and key team collaborations.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glow-border p-1 md:p-1.5 glass-card overflow-hidden group cursor-default">
                {/* Cyber Scanning Line */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[scan_3s_linear_infinite]"></div>
                </div>

                <div className="p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative Rocket Background with Launch Animation */}
                  <motion.div 
                    className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                    whileHover={{ y: -50, x: 50, scale: 1.1 }}
                  >
                    <Rocket size={300} className="text-purple-500 rotate-12 group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
                  </motion.div>

                  <div className="flex flex-col md:flex-row gap-12 relative z-10">
                    {/* Left Column: Role & Info */}
                    <div className="md:w-1/2">
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-6"
                        animate={{ 
                          boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 10px rgba(168,85,247,0.3)", "0 0 0px rgba(168,85,247,0)"] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles size={12} className="animate-pulse" />
                        Featured Role
                      </motion.div>
                      
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors tracking-tight relative">
                        {exp.title}
                        {/* Underline Animation */}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-500 transition-all duration-500 group-hover:w-20"></span>
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-8 text-neutral-400 text-sm font-bold uppercase tracking-wider">
                        <Calendar size={16} className="text-purple-500" />
                        {exp.date}
                      </div>

                      <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        {exp.description}
                      </p>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:w-1/2 space-y-10">
                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-purple-500" />
                          Focus Areas
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {exp.projects.map((proj, pIdx) => (
                            <motion.li 
                              key={pIdx} 
                              className="text-sm text-neutral-400 flex items-center gap-2"
                              whileHover={{ x: 5, color: "#fff" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                              {proj}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <Code2 size={16} className="text-purple-500" />
                          Core Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, sIdx) => (
                            <motion.span 
                              key={sIdx} 
                              className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-[11px] font-bold text-neutral-500 uppercase tracking-wider group-hover:border-purple-500/30 group-hover:text-neutral-300 transition-all cursor-default"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgba(168,85,247,0.1)",
                                borderColor: "rgba(168,85,247,0.5)",
                                color: "#a855f7"
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CSS for Scan Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}} />
    </section>
  );
};

export default Experience;
