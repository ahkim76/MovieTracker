import "../movies.css";
function WishlistCard({ movie }) {
  return (
    <li className="wishlistLi" key={movie.imdbID}>
      <div className="wishlistContent">
        <img
          className="wishlistImg"
          src={movie.Poster}
          alt={`${movie.Title} movie poster`}
        />
        <h3 className="wishlistTitle">{movie.Title}</h3>
      </div>
    </li>
  );
}

export default WishlistCard;
