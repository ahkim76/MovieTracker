import "../movies.css";
import MovieAdd from "./MovieAdd";
import { useEffect, useState } from "react";
function MovieCard({ movie, inWishlist, addToWishlist }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (inWishlist(movie)) {
      setSaved(true);
    }
  }, [movie, inWishlist]);

  return (
    <li className="movieLi" key={movie.imdbID}>
      <h3 className="movieTitle">{movie.Title}</h3>
      <div className="movieDiv">
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
      <MovieAdd movie={movie} isSaved={saved} addToWishlist={addToWishlist} />
      <img
        className="movieImg"
        src={movie.Poster}
        alt={`${movie.Title} movie poster`}
      />
    </li>
  );
}

export default MovieCard;
