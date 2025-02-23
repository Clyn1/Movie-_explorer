import { useEffect, useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import MovieList from "../components/MovieList";
import MovieCarousel from "../components/MovieCarousel";
import TrueFocus from "../components/AnimatedText";  // Corrected path
import HeroSection from "../components/HeroSection"; // Import HeroSection
import Trending from "../components/Trending"; // Import Trending component

function Home({ searchQuery, setSearchQuery }) { // Add setSearchQuery as a prop
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchQuery}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const addToWatchlist = (movie) => {
    const isMovieInWatchlist = watchlist.some((m) => m.id === movie.id);
    if (!isMovieInWatchlist) {
      const newWatchlist = [...watchlist, movie];
      setWatchlist(newWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
    } else {
      console.log("Movie already in watchlist");
    }
  };

  return (
    <div>
      <TrueFocus sentence="Welcome to Movie Explorer" /> {/* Add AnimatedText component */}
      <HeroSection /> {/* Add HeroSection component */}
      <Trending /> {/* Add Trending component */}
      {loading ? (
        <div className="loading-spinner">
          <TailSpin color="#333" height={50} width={50} />
        </div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="content-container">
          <div className="carousel-wrapper">
            <MovieCarousel movies={movies.slice(0, 5)} addToWatchlist={addToWatchlist} />
          </div>
          <div className="movie-list-wrapper">
            <MovieList movies={movies.slice(5)} addToWatchlist={addToWatchlist} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;