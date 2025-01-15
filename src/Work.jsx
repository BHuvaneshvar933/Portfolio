import React from 'react';
import vreality from "./assets/vreality.png";
import linkedin from "./assets/linkedin.png";
import todo from "./assets/todo.png";
import recipesauce from "./assets/recipesauce.png";
import "animate.css";
const Work = () => {
  const projects = [
    {
      title: "VReality(Product Landing Page)",
      description: "Web Development",
      image: vreality,
      link: "https://v-reality-azure.vercel.app",
     
    },
    {
      title: "Linkedin Clone",
      description: "Web Development",
      image: linkedin,
      link: "https://linkedin-clone-theta-five.vercel.app",
      size: "large",
      color: "black",
    
    },
    {
      title: "RecipeSauce(Search recipes)",
      description: "Web Development",
      image: recipesauce,
      link: "https://recipe-sauce.vercel.app",
      size: "large",
      color: "black",
     
    },
    {
      title: "Todo",
      description: "Web Development",
      image: todo,
      link: "https://to-do-gilt-ten.vercel.app",
     
    },
  ];

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
        <p className="text-lg sm:text-xl mb-16 mx-auto slideUp text-center text-neutral-300 max-w-4xl font-bold" id="normalText">
          Here are a few past design projects I've worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6" >
          {projects.map((project, index) => (
            <div
               data-aos-duration="2000"
              key={index}
              className={`${project.size === "large"
                  ? "col-span-1 sm:col-span-2 lg:col-span-2"
                  : "col-span-1"
                } ${project.color === "black" ? "border-4 border-neutral-900" : "border-4 border-neutral-300"
                }  bg-gray-800 rounded-lg overflow-hidden  shadow-md `} id="tile animate-zoom"
                
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover"
                />
                <div className="p-4 bg-gradient-to-br from-neutral-950 to-neutral-800">
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
