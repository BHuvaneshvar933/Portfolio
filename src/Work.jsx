import React, { useState, useMemo } from "react";
import vreality from "./assets/vreality.webp";
import chat from "./assets/chat.webp";
import gym from "./assets/Products1_page.webp";
import recipesauce from "./assets/recipesauce.webp";
import home from "./assets/home_page.webp";
import air from "./assets/book.png";
import event from "./assets/event.webp";
import xo from "./assets/xo.jpeg";
import shop from "./assets/shop.png";
import "animate.css";
import todo from "./assets/todo.png"; 
import coffee from "./assets/coffee.png"

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const projects = useMemo(
    () => [
      {
        title: "Event Management System",
        description:
          "A complete event registration and management platform with user login, QR check-in, and admin dashboard.(Backend is not deployed properly due to issues with Render)",
        Tech_Stack: "React.js, Tailwind CSS, MongoDB",
        image: event,
        demo: "https://event-management-dusky.vercel.app",
        link: "https://github.com/BHuvaneshvar933/Event-Management",
        domain: "Web development",
      },
      {
        title: "RecipeSauce",
        description:
          "A dynamic recipe search engine using an API to fetch thousands of recipes based on ingredients or meal types.",
        Tech_Stack: "React.js, Tailwind CSS, API",
        image: recipesauce,
        demo: "https://recipe-sauce.vercel.app",
        link: "https://github.com/BHuvaneshvar933/RecipeSauce",
        domain: "Web development",
      },
      {
        title: "Airbnb Clone",
        description:
          "A clone of Airbnb's feed and profile system with user authentication and post interactions.",
        Tech_Stack: "React.js, Tailwind CSS, MongoDB",
        image: air,
        demo: "https://abproject-sclone.vercel.app/",
        link: "https://github.com/BHuvaneshvar933/AirBnb_clone",
        domain: "Web development",
      },
      {
        title: "E-commerce Website",
        description:
          "A modern e-commerce store platform with product catalog, details, and cart functionality using React and MongoDB.",
        Tech_Stack: "React.js, Tailwind CSS, MongoDB",
        image: gym,
        demo: "https://gymstore2.vercel.app/products",
        link: "https://github.com/BHuvaneshvar933/gymstore3",
        domain: "Web development",
      },
      {
        title: "Photography Portfolio",
        description:
          "A clean and minimalist portfolio website for photographers to showcase their work with elegant design.",
        image: home,
        Tech_Stack: "HTML, CSS , JavaScript",
        demo: "https://photography-portfolio-ebon-seven.vercel.app",
        link: "https://github.com/BHuvaneshvar933/Photography_portfolio",
        domain: "Web development",
      },
      {
        title: "Virtual Reality Landing Page",
        description:
          "A stylish landing page for a VR product, highlighting features, benefits, and call-to-action sections.",
        Tech_Stack: "React.js, Tailwind CSS",
        image: vreality,
        demo: "https://v-reality-azure.vercel.app",
        link: "https://github.com/BHuvaneshvar933/vreality",
        domain: "Web development",
      },
      {
        title: "Chat App",
        description:
          "A real-time chat application using WebSockets where users can create rooms and chat instantly.",
        Tech_Stack: "React.js, Tailwind CSS, MongoDB",
        image: chat,
        link: "https://github.com/BHuvaneshvar933/cha",
        domain: "Web development",
      },
      {
        title: "Tic-Tac-Toe (Android)",
        description:
          "A simple Android Tic-Tac-Toe game built with Kotlin showcasing basic state handling and recyclerviews.",
        Tech_Stack: "Kotlin, Android Studio, XML",
        image: xo, // replace with your actual app image
        link: "https://github.com/BHuvaneshvar933/tic-tac-toe-kotlin",
        domain: "App development",
      },{
        title: "To-do (Android)",
        description:
          "A simple Android To-Do app built using Kotlin, featuring task management with RecyclerView, local database handling, and a clean Material Design interface.",
        Tech_Stack: "Kotlin, Android Studio, XML",
        image: todo, // replace with your actual app image
        link: "https://github.com/BHuvaneshvar933/to-do-app",
        domain: "App development",
      },
      {
        title: "Coffee Shop App",
        description:
          "An elegant and functional food delivery Android application built using Kotlin, XML (Jetpack Layouts), and Android Jetpack components. Users can browse food items, add them to cart, apply discount codes, and proceed to checkout.",
        Tech_Stack: "Kotlin, Android Studio, XML, Firebase (Database + Storage), local storage",
        image: coffee, // replace with your actual app image
        link: "https://github.com/BHuvaneshvar933/coffee_shop_app_kotlin",
        domain: "App development",
      }
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.domain === activeCategory);
  }, [activeCategory, projects]);

  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <>
      <div id="work"></div>
      <section className="text-white   mt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8" id="heading">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-extrabold">
            Projects
          </span>
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap ">
          {["All", "Web development", "App development"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` text-sm sm:text-base font-bold  px-6 py-3 rounded-full  uppercase  transition duration-300 ${
                activeCategory === category
                  ? "    text-white  bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-700 animate-neon-glow transition"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transition-transform card"
            >
              <a target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-60 overflow-hidden group bg-neutral-900">
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project showing ${project.description.split(".")[0]}`}
                    onLoad={() => handleImageLoad(index)}
                    className={`object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105 ${
                      !loadedImages[index] ? "opacity-0" : "opacity-100"
                    }`}
                    style={{ transition: "opacity 0.3s ease-in-out" }}
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-lg">
                  <h3 className="text-xl sm:text-lg md:text-2xl bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-extrabold">
                    {project.title}
                  </h3>
                  <h3 className="w-12 mt-2 h-1 bg-neutral-300 rounded-lg"></h3>
                  <p className="text-sm mt-2 sm:text-base md:text-base text-gray-400">
                    {project.Tech_Stack}
                  </p>
                  <p className="text-sm mt-2 sm:text-base md:text-base text-gray-400">
                    {project.description}
                  </p>
                  <p className="text-sm mt-2 sm:text-base md:text-lg text-gray-100">
                    {project.domain}
                  </p>
                  <div className="flex gap-4 mt-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg shadow-md transition duration-300"
                    >
                      GitHub
                    </a>
                    {/* <a
  href={`/projects/${project.slug}`}
  className="px-4 py-2 border border-gray-400 text-white hover:bg-gray-800 rounded-lg shadow-md transition duration-300"
>
  More Info
</a> */}

                  </div>
                </div>
              </a>
            </div>
          ))}

          <div className="col-span-full flex justify-center items-center mt-4">
            <button
              className="w-16 h-16 text-4xl font-bold hover:scale-110 transition-transform plus-symbol"
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
