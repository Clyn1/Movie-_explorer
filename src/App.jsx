import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;