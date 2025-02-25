import React,{useState} from 'react';
import vreality from "./assets/vreality.png";
import chat from "./assets/chat.png";
import gym from "./assets/Products1_page.jpg";
import recipesauce from "./assets/recipesauce.png";
import home from "./assets/home_page.jpg"
import linkedIn from "./assets/linkedin.png"
import "animate.css";
const Work = () => {
  const projects = [
    {
      title: "Photography-portfolio",
      description: "Web Development",
      image: home,
      link: "https://github.com/BHuvaneshvar933/Photography_portfolio",
     
    },
   
    {
      title: "RecipeSauce(Search recipes)",
      description: "Web Development",
      image: recipesauce,
      link: "https://github.com/BHuvaneshvar933/RecipeSauce",
      size: "large",
      color: "black",
     
    },
    {
      title: "chatapp",
      description: "Web Development",
      image: chat,
      link: "https://github.com/BHuvaneshvar933/cha",
      size: "large",
      color: "black",
    },
    {
      title: "E-commerce Gym Website",
      description: "Web Development",
      image: gym,
      link: "https://github.com/BHuvaneshvar933/gymstore3",
      
    
    },
    {
      title: "Product landing page",
      description: "Web Development and Design",
      image: vreality,
      link: "https://github.com/BHuvaneshvar933/vreality",
      
    
    },
    {
      title: "LinkedIn Clone",
      description: "Web Development",
      image: linkedIn,
      link: "https://github.com/BHuvaneshvar933/Linkedin-Clone",
      size: "large",
      color: "black",
    },
  ];
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div id="work"></div>
      <section className="text-white w-full  py-12 px-4 md:px-12 lg:px-40 mt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8" id="heading">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-extrabold">
            Projects
          </span>
        </h2>
        <p className="text-lg sm:text-xl mb-16 mx-auto slideUp text-center text-neutral-400 max-w-4xl font-bold" id="normalText">
          Here are a few past design projects I've worked on.(click to open repository)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6" >
        {projects.slice(0, showMore ? projects.length : 4).map((project, index) => (
  <div
    
    key={index}
    className=" bg-transparent rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-110"
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative">
        
      </div>
      <div className="p-4 bg-gradient-to-br from-neutral-950 to-neutral-800">
        <h3 className="text-sm sm:text-lg md:text-xl font-semibold ">{project.title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">{project.description}</p>
      </div>
    </a>
  </div>
))}
 {/* Expand Button - Always Last */}
 <div className="col-span-full flex justify-center items-center">
            <button
              className="scroll-indicator w-24 h-24  text-5xl text-purple-600 font-bold   hover:scale-110 transition-transform flex justify-center items-center"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "−" : "+"}
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Work;
