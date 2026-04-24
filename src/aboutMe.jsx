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
              Hey! I&apos;m <span className="text-white font-bold">C Bhuvaneshvar Reddy</span>, a driven developer currently pursuing my B.E. in Computer Science. I architect responsive, full-stack experiences using the <span className="text-purple-400">MERN stack</span>, with a proven track record of delivering production-ready industry projects.
            </p>

            <p>
              My journey bridges the gap between web development and <span className="text-purple-400">Android engineering</span>. I&apos;ve collaborated with diverse clients to turn concepts into reality, mastering the art of solving complex problems under real-world constraints.
            </p>

            <p>
              Currently, I&apos;m pushing boundaries with <span className="text-purple-400">WebSockets</span>, <span className="text-purple-400">Blockchain/Smart Contracts</span>, and <span className="text-purple-400">AI integration</span> to build the next generation of intelligent, decentralized applications.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
             {["Full Stack", "Native Android", "Web3 Explorer", "AI Enthusiast"].map(tag => (
               <span key={tag} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-purple-400 uppercase tracking-widest">{tag}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
