import { Link } from "react-router-dom";

function CarouselMovieCard({ movie }) {
  return (
    <div className="carousel-movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
}

export default CarouselMovieCard;