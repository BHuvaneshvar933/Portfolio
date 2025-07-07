import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="text-white z-50 w-full bg-neutral-950">
    <div className="container mx-auto px-4 text-center">
      {/* CTA Section */}
      <div className="flex flex-col md:flex-row md:space-x-7 relative bottom-24 w-full h-auto bg-gradient-to-br from-neutral-950 to-neutral-800 mx-auto rounded-xl px-10 py-10">
        <h2 className="text-xl md:text-2xl mb-3 md:mb-0 font-bold">
          <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text">Let's work together...</span>
        </h2>
        <p className="text-base md:text-base font-bold flex-1 mb-4 md:mb-0">
          Have an exciting project you need help with? Submit your contact or reach out via social media!
        </p>
        <Link to="/user-form">
          <button
            className="px-6 py-3 w-full md:w-48 shadow-md hover:bg-purple-700 transition bg-white rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-neon hover:shadow-neon-hover"
            id="neon-button"
          >
            CONTACT ME
          </button>
        </Link>
      </div>

      {/* Quote */}
      <p className="mt-3 mb-8 text-lg md:text-2xl">
        <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold text-4xl">L</span>iving,{" "}
        <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold text-4xl">L</span>earning, &{" "}
        <span className="bg-gradient-to-br from-purple-300 to-purple-600 text-transparent bg-clip-text font-extrabold text-4xl">L</span>eveling up one day at a time.
      </p>

      {/* Contact Info */}
<div className="w-full max-w-5xl mx-auto mb-10 px-4 ">
  <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-3 text-left">
    
    {/* Email */}
    <div className="flex items-start gap-3  bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
      <Mail className="text-purple-400 mt-1" />
      <div>
        <h4 className="text-sm text-neutral-400 font-medium">Email</h4>
        <p className="text-neutral-300 break-words text-sm sm:text-base">
          bhuvaneshvar.r.c@gmail.com
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-3  bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
      <Phone className="text-purple-400 mt-1" />
      <div>
        <h4 className="text-sm text-neutral-400 font-medium">Phone</h4>
        <p className="text-neutral-300 text-sm sm:text-base">+91 9449253437</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-3  bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
      <MapPin className="text-purple-400 mt-1" />
      <div>
        <h4 className="text-sm text-neutral-400 font-medium">Location</h4>
        <p className="text-neutral-300 text-sm sm:text-base">
          Bangalore, Karnataka, India
        </p>
      </div>
    </div>

  </div>
</div>


      {/* Social Links */}
      <div className="contact-links text-lg md:text-2xl space-x-4 md:space-x-7 mb-8">
        <a
          href="https://www.linkedin.com/in/c-bhuvaneshvar-reddy-01b985279/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-details hover:text-purple-300"
        >
          <i className="fa fa-linkedin-square"> Linkedin</i>
        </a>
        <a
          href="https://x.com/C_Bhuvaneshvar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-details hover:text-purple-300"
        >
          <i className="fa fa-twitter"> Twitter</i>
        </a>
        <a
          href="https://github.com/BHuvaneshvar933"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-details hover:text-purple-300"
        >
          <i className="fa fa-github"> GitHub</i>
        </a>
        <a
          href="https://www.instagram.com/bhuvan_054/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-details hover:text-purple-300"
        >
          <i className="fa fa-instagram"> Instagram</i>
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-xs md:text-sm">
        Handcrafted by me ©{" "}
        <span className="bg-gradient-to-br from-purple-300 to-purple-500 text-transparent bg-clip-text font-bold">
          C Bhuvaneshvar Reddy
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
