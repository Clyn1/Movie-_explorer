import { useEffect, useState } from "react";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <div>
      <h1>Your Watchlist</h1>
      {watchlist.map((movie) => (
        <div key={movie.id} className="watchlist-movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default WatchList;