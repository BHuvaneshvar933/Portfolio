import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase"; // Import Firebase configuration

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [message, setMessage] = useState(''); // State for the confirmation message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add data to Firestore
      await addDoc(collection(db, "users"), {
        name: formData.name,
        contact: formData.contact,
      });
      setMessage("Will contact you soon"); // Set confirmation message
      setFormData({ name: '', contact: '' }); // Reset form
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit data.");
    }
  };

  const handleReset = () => {
    setFormData({ name: '', contact: '' });
  };

  const handleClose = () => {
    setFormData({ name: '', contact: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="p-8 rounded-lg shadow-lg w-96 relative"
      >
        <div className="flex flex-row justify-end space-x-5">
          <div>
            <button 
              type="button" 
              onClick={handleReset} 
              className="pt-1 shadow-md text-purple-700 hover:text-white rounded-full text-xl font-semibold"
            >
              <i className="fa fa-refresh"></i> 
            </button>
          </div>
          <div>
            <Link to="/#home">
              <button 
                type="button" 
                onClick={handleClose} 
                className="text-4xl text-purple-700 hover:text-white"
              >
                &times; 
              </button>
            </Link>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 ml-20">Contact Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-semibold mb-2">
            Contact
          </label>
          <input 
            type="text" 
            id="contact" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            className="w-full p-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="flex pl-2 justify-between">
          <button 
            type="submit" 
            className="px-4 py-2 ml-24 shadow-md hover:bg-purple-700 transition bg-white rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-neon hover:shadow-neon-hover"
            id="neon-button"
          >
            Submit
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg shadow">
          {message}
        </div>
      )}
    </div>
  );
};

export default UserForm;
