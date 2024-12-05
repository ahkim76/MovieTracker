import "../movies.css";
import MovieDelete from "./MovieDelete";
function WishlistCard({ movie, onRemove }) {
  return (
    <li className="wishlistLi" key={movie.imdbID}>
      <div className="wishlistContent">
        <img
          className="wishlistImg"
          src={movie.Poster}
          alt={`${movie.Title} movie poster`}
        />
        <h3 className="wishlistTitle">{movie.Title}</h3>
        <MovieDelete movie={movie} onRemove={onRemove} />
      </div>
    </li>
  );
}

export default WishlistCard;
