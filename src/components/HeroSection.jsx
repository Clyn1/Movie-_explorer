import React from "react";
import "./HeroSection.css"; // Ensure the correct path to the CSS file
import backgroundImage from "../assets/images/clinton2.jpeg"; // Import the image

const HeroSection = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for a movie, tv show, person..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;