import MovieCard from "./MovieCard";

function MovieList({ movies, addToWatchlist }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
      ))}
    </div>
  );
}

export default MovieList;