import React, { useState, useEffect } from 'react';
import './Trending.css';

const Trending = () => {
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToday((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trending-logo">
      <h1>Trending</h1>
      <div className="trending-text">
        {isToday ? 'Today' : 'This Week'}
      </div>
    </div>
  );
};

export default Trending;