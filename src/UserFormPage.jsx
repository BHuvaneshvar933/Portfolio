import React, { useState } from 'react';
import { Link } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Contact: ${formData.contact}`);
  };

  const handleReset = () => {
    setFormData({ name: '', contact: '' });
  };

  const handleClose = () => {
    // Code to close the form, you can either hide the form or reset the state
    setFormData({ name: '', contact: '' }); // Or use any other logic to close the form
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="p-8 rounded-lg shadow-lg w-96 relative"
      >
        <div className='flex flex-row justify-end space-x-5'>
            
        <div>
        
        <button 
            type="button" 
            onClick={handleReset} 
            className="pt-1   shadow-md text-purple-700 hover:text-white  rounded-full text-xl font-semibold"
          >
            <i className="fa fa-refresh"></i> 
          </button>
          
          </div>
          <div>
          <Link to="/#home">
        <button 
          type="button" 
          onClick={handleClose} 
          className=" text-4xl text-purple-700  hover:text-white"
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
        <div className="flex justify-between">
          <button 
            type="submit" 
            className="px-4 py-2 ml-24 shadow-md hover:bg-purple-700 transition bg-white rounded-full text-lg font-semibold hoverScale bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-neon hover:shadow-neon-hover"
            id="neon-button"
          >
            Submit
          </button>
          
          
        </div>
      </form>
    </div>
  );
};

export default UserForm;
