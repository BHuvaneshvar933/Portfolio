import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import emailjs from 'emailjs-com';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [message, setMessage] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear any previous messages when user starts typing again
    if (message) setMessage('');
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim() || !formData.contact.trim()) {
      setMessage("Please fill in all fields");
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setMessage("Sending your information...");
  
    try {
      const result = await emailjs.send(
        "service_ecbofp6",    
        "template_0z3ofva", 
        {
          name: formData.name,  
          contact: formData.contact,
        },
        "vKjmn9BakiVoAjvNm"          
      );
  
      console.log("Email sent successfully:", result.text);
      setMessage("Thanks! I'll contact you soon.");
      setSubmitStatus('success');
      setFormData({ name: '', contact: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        if (setSubmitStatus === 'success') {
          setMessage('');
          setSubmitStatus(null);
        }
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send. Please try again later.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleReset = () => {
    setFormData({ name: '', contact: '' });
    setMessage('');
    setSubmitStatus(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 p-8 bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-xl shadow-2xl border-2 border-purple-600">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">Contact Me</h2>
          <p className="mt-2 text-sm text-gray-400">
            Leave your details and I'll get back to you soon
          </p>
        </div>
        
        {/* Status message with appropriate styling */}
        {message && (
          <div className={`p-3 rounded-md text-center ${
            submitStatus === 'success' ? 'bg-green-800/30 text-green-300 border border-green-600' : 
            submitStatus === 'error' ? 'bg-red-800/30 text-red-300 border border-red-600' : 
            'bg-purple-800/30 text-purple-300 border border-purple-600'
          }`}>
            {message}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">Contact (Email or Phone)</label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email or Phone Number"
                value={formData.contact}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="py-2 px-4 border border-purple-600 text-purple-400 rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              disabled={isSubmitting}
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors relative"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="opacity-0">Submit</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                </>
              ) : "Submit"}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
