import React from "react";
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
    icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
    label: "Learning & Building in Tech",
    value: "2+ Years",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    label: "Web, App & Fullstack Projects",
    value: "35+ Projects",
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-400" />,
    label: "Tools & Technologies Mastered",
    value: "25+",
  },
  {
    icon: <Code className="w-8 h-8 text-purple-400" />,
    label: "Lines of Code Written",
    value: "60k+",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-400" />,
    label: "Freelance Projects Delivered",
    value: "4",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    value: "Explored",
    label: "Web Development, App Development",
  },
  {
    icon: <BarChart className="w-8 h-8 text-purple-400" />,
    label: "Daily Practice",
    value: "DSA on Leetcode",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    label: "Fullstack Ready",
    value: "MERN + Deployments",
  },
];

const DeveloperStats = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-neutral-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperStats;
