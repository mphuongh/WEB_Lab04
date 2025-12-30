import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Welcome to React Lab Exercises</h2>
      <ul className="list-none space-y-4">
        <li>
          <Link to="/mouse-tracker" className="text-blue-500 text-xl">Exercise 1.3: Mouse Tracker</Link>
        </li>
        <li>
          <Link to="/post-fetcher" className="text-blue-500 text-xl">Exercise 3.2: Post Fetcher</Link>
        </li>
        <li>
          <Link to="/controlled-signup" className="text-blue-500 text-xl">Exercise 4.1: Controlled Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
