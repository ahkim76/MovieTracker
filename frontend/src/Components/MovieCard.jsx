import "../movies.css";
function MovieCard({ movie }) {
  return (
    <li className="movieLi" key={movie.imdbID}>
      <h3>{movie.Title}</h3>
      <div className="movieDiv">
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
      <img src={movie.Poster} alt={`${movie.Title} movie poster`} />
    </li>
  );
}

export default MovieCard;
