import React, { useState } from 'react';

const ControlledSignup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exercise 4.1: Controlled Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full cursor-pointer hover:bg-blue-600 active:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledSignup;
