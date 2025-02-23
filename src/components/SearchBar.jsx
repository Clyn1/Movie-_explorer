import React, { useState } from "react";

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie, tv show, person..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;