import React from "react";
import { Instagram,Linkedin,Twitter,Github } from 'lucide-react';

const Footer = () => (
  <footer className=" text-white py-8 z-50">
    <div className="container mx-auto text-center">
      <div className="flex space-x-7">

    <h2>Let's work together...</h2>
         <p>Have an exciting project you need help with?
Send me an email or contact me via instant message!</p>
</div>
      <p className="text-sm">Handcrafted by me © C Bhuvaneshvar Reddy</p>
      <div className="contact-links">
         <a id="profile-link" href="https://www.linkedin.com/in/c-bhuvaneshvar-reddy-01b985279/" target="_blank" class="contact-details">
         
           <i className="fa fa-linkedin-square">
             
             </i>
             
             Linkedin
         </a>
         <a id="profile-link" href="https://x.com/C_Bhuvaneshvar" target="_blank" class="contact-details">
         <i className="fa fa-twitter">Twitter</i>
         </a>
         <a id="profile-link" href="https://github.com/BHuvaneshvar933" target="_blank" class="contact-details">
           <i className="fa fa-github"> GitHub</i>
         </a>
         <a id="profile-link" href="https://www.instagram.com/bhuvan_054/" target="_blank" class="contact-details">
         <i className="fa fa-instagram"> Instagram</i>
         </a>
         </div>
      <div className="mt-4">
        <a href="#privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
        <a href="#terms" className="text-gray-400 hover:text-white mx-4">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
