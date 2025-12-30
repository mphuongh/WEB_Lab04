import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">React Lab Exercises</h1>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/mouse-tracker" className="px-4">Mouse Tracker</Link>
          <Link to="/post-fetcher" className="px-4">Post Fetcher</Link>
          <Link to="/controlled-signup" className="px-4">Controlled Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
