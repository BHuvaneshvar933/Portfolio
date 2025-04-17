import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-1/3  flex flex-col gap-3 z-50 animate-neon-glow rounded-e-xl p-2 " id="neon">
      <a
        href="https://www.linkedin.com/in/c-bhuvaneshvar-reddy-01b985279/"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <Linkedin
          size={30}
          className="text-blue-500  hover:scale-110 transition-transform"
        />
      </a>
      <div className=" border-b-2 "></div>
      <a
        href="https://github.com/BHuvaneshvar933"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github
          size={30}
          className="text-white  hover:scale-110 transition-transform"
        />
      </a>
      <div className=" border-b-2 "></div>
      <a
        href="https://www.instagram.com/bhuvan_054/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram
          size={30}
          className="text-pink-500  hover:scale-110 transition-transform"
        />
      </a>
      <div className=" border-b-2 "></div>
      <a
        href="https://x.com/C_Bhuvaneshvar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter
          size={30}
          className="text-sky-400  hover:scale-110 transition-transform"
        />
      </a>
    </div>
  );
};

export default Sidebar;
