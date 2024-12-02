import "../movies.css";
import MovieAdd from "./MovieAdd";
function MovieCard({ movie }) {
  return (
    <li className="movieLi" key={movie.imdbID}>
      <h3 className="movieTitle">{movie.Title}</h3>
      <div className="movieDiv">
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
      <MovieAdd />
      <img
        className="movieImg"
        src={movie.Poster}
        alt={`${movie.Title} movie poster`}
      />
    </li>
  );
}

export default MovieCard;
