import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exercise 1.3: Mouse Tracker</h2>
      <p>Mouse Position: {`x: ${coordinates.x}, y: ${coordinates.y}`}</p>
    </div>
  );
};

export default MouseTracker;
