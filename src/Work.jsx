import React from 'react';
import vreality from "./assets/vreality.png";
import photo from "./assets/home_page.jpg";
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
      title: "LinkedIn Clone",
      description: "Web Development",
      image: linkedIn,
      link: "https://github.com/BHuvaneshvar933/Linkedin-Clone",
      size: "large",
      color: "black",
    },
    {
      title: "E-commerce Gym Website",
      description: "Web Development",
      image: gym,
      link: "https://github.com/BHuvaneshvar933/gymstore3",
      
    
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
        <p className="text-lg sm:text-xl mb-16 mx-auto slideUp text-center text-neutral-400 max-w-4xl font-bold" id="normalText">
          Here are a few past design projects I've worked on.(click to open repository)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6" >
        {projects.map((project, index) => (
  <div
    data-aos="fade-up" data-aos-duration="2000"
    key={index}
    className={`${project.size === "large"
        ? "col-span-1 sm:col-span-2 lg:col-span-2"
        : "col-span-1"
      } ${project.color === "black" ? "border-4 border-neutral-900" : "border-4 border-neutral-300"
      } bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-110`}
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 lg:h-96 object-cover transition-all duration-500"
        />
      </div>
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
