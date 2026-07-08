import { motion } from "framer-motion";
import {
  BrainCircuit,
  Rocket,
  Settings,
  Code,
  Briefcase,
  BookOpen,
  BarChart,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    label: "Building in Tech",
    value: "2+ Years",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    label: "Web & App Projects",
    value: "35+",
  },
  {
    icon: <Settings className="w-6 h-6 text-purple-400" />,
    label: "Stack Mastered",
    value: "10+",
  },
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    label: "Lines of Code",
    value: "60k+",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    label: "Client Collaborations",
    value: "5+",
  },
  {
    icon: <BarChart className="w-6 h-6 text-purple-400" />,
    label: "DSA Problems",
    value: "195+",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    label: "Backend Ready",
    value: "Node & Spring",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    label: "Currently Building",
    value: "AI Systems",
  },
];

const DeveloperStats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glow-border p-6 glass-card flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="mb-4 p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperStats;
