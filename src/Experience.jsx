import React from 'react';


const Experience = () => {
    const experience = [
        {
            title: "AD ASTRA CIT",
            link: "https://www.instagram.com/adastra.cit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
            Description: "As a Programming Member of the Adastra Club, I contribute to the development and implementation of software solutions for various projects. I collaborate with the team to design, write, and test code for applications, ensuring they meet the technical requirements and functionality. I also enhance my programming skills through hands-on projects, workshops, and teamwork, while continuously learning new techniques and technologies to contribute effectively to the club's innovative initiatives.",
            duration: "2024-present",
            image: "https://framerusercontent.com/images/CUElpCrd5eTQh2WZJb4pZEr38.jpeg",
        }
    ];

    return (
        <div className="flex  flex-col items-center w-full" >
            <h1 className='text-5xl text-center mt-24 mb-12' id='heading'>
                My <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">Experience</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid-rows-1 gap-6 mx-4 max-md:mb-36 mb-48" id="exp">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-gradient-to-br from-neutral-950 to-neutral-800 overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 px-5 py-8 border-2 border-neutral-700 mx-auto max-md:ml-4 "
                         data-aos="fade-up"
            data-aos-duration="2000"
                    >
                        <div className="p-4 flex flex-col md:flex-row">
                            <img src={exp.image} alt={exp.title} className='w-14 h-14 border-8 border-double border-purple-600 rounded-lg mb-4 md:mb-0 md:mr-3' />
                            <div className="flex-grow">
                                <h3 className="text-sm sm:text-lg md:text-xl font-bold">
                                    <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">{exp.title}</span>
                                </h3>
                                <a href={exp.link} className='text-neutral-600 font-semibold'>AD ASTRA CIT</a>
                            </div>
                            <p className='text-2xl font-bold mt-2 md:mt-0 md:ml-4 bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text'>{exp.duration}</p>
                        </div>
                        <div className='border-spacing-4 border-2 border-neutral-700 p-4 bg-black rounded-lg'>
                        <p className='text-lg mb-1.5'>Programming Team</p>
                        <p className="text-sm sm:text-base md:text-lg text-neutral-400 ">{exp.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
