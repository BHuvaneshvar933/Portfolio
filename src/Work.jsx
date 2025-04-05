import React, { useState, useMemo } from "react";
import vreality from "./assets/vreality.webp";
import chat from "./assets/chat.webp";
import gym from "./assets/Products1_page.webp";
import recipesauce from "./assets/recipesauce.webp";
import home from "./assets/home_page.webp";
import linkedIn from "./assets/linkedin.webp";
import event from "./assets/event.webp"
import "animate.css";

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = useMemo(() => [
    {
      title: "Event Management",
      description: "Web Development",
      image: event,
      link: "https://github.com/BHuvaneshvar933/Event-Management",
    },
    {
      title: "RecipeSauce (Search Recipes)",
      description: "Web Development",
      image: recipesauce,
      link: "https://github.com/BHuvaneshvar933/RecipeSauce",
    },
    {
      title: "Chat App",
      description: "Web Development",
      image: chat,
      link: "https://github.com/BHuvaneshvar933/cha",
    },
    {
      title: "E-commerce Gym Website",
      description: "Web Development",
      image: gym,
      link: "https://github.com/BHuvaneshvar933/gymstore3",
    },
    {
      title: "Photography Portfolio",
      description: "Web Development",
      image: home,
      link: "https://github.com/BHuvaneshvar933/Photography_portfolio",
    },
    {
      title: "Product Landing Page",
      description: "Web Development and Design",
      image: vreality,
      link: "https://github.com/BHuvaneshvar933/vreality",
    },
    {
      title: "LinkedIn Clone",
      description: "Web Development",
      image: linkedIn,
      link: "https://github.com/BHuvaneshvar933/Linkedin-Clone",
    },
  ], []);

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <>
      <div id="work"></div>
      <section className="text-white w-full py-12 px-4 md:px-12 lg:px-40 mt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-extrabold">
            Projects
          </span>
        </h2>
        <p className="text-lg sm:text-xl mb-16 mx-auto text-center text-neutral-400 max-w-4xl font-bold">
          Here are a few past design projects I've worked on. (Click to open repository)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transition-transform"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-full h-60 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                   
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-neutral-950 to-neutral-800">
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}

          <div className="col-span-full flex justify-center items-center mt-4">
            <button
              className="w-16 h-16 text-4xl text-purple-600 font-bold hover:scale-110 transition-transform"
              onClick={() => setShowMore(!showMore)}
              aria-label={showMore ? "Show Less Projects" : "Show More Projects"}
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
