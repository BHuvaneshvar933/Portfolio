import { motion } from "framer-motion";
import { Calendar, Briefcase, Rocket, Code2, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Ad Astra Member",
      date: "2024 - Present",
      description: "Collaborating with a high-performance team to build innovative software solutions. Participating in agile sprints and technical architectural planning.",
      icon: <Rocket size={20} />,
      color: "blue",
      projects: [
        "Agile team collaborations",
        "Open-source contributions",
        "Technical code reviews"
      ],
      skills: ["Agile", "GitHub Actions", "Architecture", "Teamwork"]
    }
  ];

  return (
    <section id="experience" className="py-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight" id="heading">
            Work <span className="text-purple-500">History</span>
          </h2>
          <p className="text-neutral-500 font-medium max-w-lg mx-auto">My professional journey through impactful projects and team collaborations.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
          {/* Main vertical line with gradient pulse */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-20"></div>
          
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 shadow-2xl group transition-all">
                  <div className={`absolute inset-0 bg-${exp.color}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <span className={`text-${exp.color}-400 relative z-20`}>{exp.icon}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-16' : 'sm:pr-16'} pl-12 sm:pl-0 mt-8 sm:mt-0`}>
                  <div className="glow-border p-8 glass-card hover:bg-white/[0.03] transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-2 text-neutral-500 text-sm font-bold uppercase tracking-wider">
                          <Calendar size={14} className="text-purple-500" />
                          {exp.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-400 leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">Focus Areas</h4>
                        <ul className="space-y-3">
                          {exp.projects.map((proj, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-sm text-neutral-400">
                              <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">Core Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[10px] font-bold text-neutral-500 uppercase">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
