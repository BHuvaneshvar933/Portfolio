import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'var(--gradient-mesh)' }}></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="https://mattfarley.ca/img/mf-avatar.svg"
              className="w-48 h-48 sm:w-56 sm:h-56 relative z-10 rounded-full bg-[#0a0a0a] border border-white/10"
              alt="Avatar"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-10 tracking-tight" id="heading">
            ABOUT <span className="text-purple-500 glitch" data-text="ME">ME</span>
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-neutral-400 leading-relaxed font-medium">
            <p>
              Hey! I&apos;m <span className="text-white font-bold">C Bhuvaneshvar Reddy</span>, a final year Computer Science student (GPA 9.04) and <span className="text-purple-400">Backend Engineer</span> based in Bangalore. I write systems that scale—not just demos that look good.
            </p>

            <p>
              My expertise lies in architecting production-grade backend systems with practical AI integration. I&apos;m backend-heavy but full-stack capable, spanning <span className="text-purple-400">Node.js, Spring Boot, TypeScript, and Python</span>. I thrive on solving complex engineering challenges—from orchestrating real-time data pipelines and asynchronous workflows to building out secure, multi-tenant architectures. I focus on shipping resilient, real-world products.
            </p>

            <p>
              Currently, my primary focus is diving deep into <span className="text-purple-400">System Design</span>, solving complex <span className="text-purple-400">DSA</span> problems, and exploring advanced AI patterns like <span className="text-purple-400">Vector Databases</span> and <span className="text-purple-400">RAG architectures</span>.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
             {["Backend Engineer", "System Architecture", "RAG & Vector DBs", "Scalable Systems"].map(tag => (
               <span key={tag} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-purple-400 uppercase tracking-widest">{tag}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
