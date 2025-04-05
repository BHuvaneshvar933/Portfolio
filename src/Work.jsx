import React, { useState, useMemo } from "react";
import vreality from "./assets/vreality.webp";
import chat from "./assets/chat.webp";
import gym from "./assets/Products1_page.webp";
import recipesauce from "./assets/recipesauce.webp";
import home from "./assets/home_page.webp";
import air from "./assets/book.png";
import event from "./assets/event.webp"
import "animate.css";

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = useMemo(() => [
    {
      title: "Event Management System",
      description: "A complete event registration and management platform with user login, QR check-in, and admin dashboard.",
      image: event,
      link: "https://github.com/BHuvaneshvar933/Event-Management",
      domain: "Web development"
    },
    {
      title: "RecipeSauce",
      description: "A dynamic recipe search engine using an API to fetch thousands of recipes based on ingredients or meal types.",
      image: recipesauce,
      link: "https://github.com/BHuvaneshvar933/RecipeSauce",
       domain: "Web development"
    },
    {
      title: "Chat App",
      description: "A real-time chat application using WebSockets where users can create rooms and chat instantly.",
      image: chat,
      link: "https://github.com/BHuvaneshvar933/cha",
       domain: "Web development"
    },
    {
      title: "E-commerce Gym Website",
      description: "A modern gym store platform with product catalog, details, and cart functionality using React and MongoDB.",
      image: gym,
      link: "https://github.com/BHuvaneshvar933/gymstore3",
       domain: "Web development"
    },
    {
      title: "Photography Portfolio",
      description: "A clean and minimalist portfolio website for photographers to showcase their work with elegant design.",
      image: home,
      link: "https://github.com/BHuvaneshvar933/Photography_portfolio",
       domain: "Web development"
    },
    {
      title: "Virtual Reality Landing Page",
      description: "A stylish landing page for a VR product, highlighting features, benefits, and call-to-action sections.",
      image: vreality,
      link: "https://github.com/BHuvaneshvar933/vreality",
       domain: "Web development"
    },
    {
      title: "Airbnb Clone",
      description: "A clone of Airbnb's feed and profile system with user authentication and post interactions.",
      image: air,
      link: "https://github.com/BHuvaneshvar933/AirBnb_clone",
       domain: "Web development"
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
                <div className="p-4 bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-lg h-48">
                  <h3 className="text-xl sm:text-lg md:text-2xl  bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-extrabold">
                    {project.title}
                  </h3>
                  <h3 className="w-12 mt-2 h-1 bg-neutral-300 rounded-lg"></h3>
                  <p className="text-sm mt-2 sm:text-base md:text-base text-gray-400">
                    {project.description}
                  </p>
                  <p className="text-sm mt-2 sm:text-base md:text-lg text-gray-100">
                    {project.domain}
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
