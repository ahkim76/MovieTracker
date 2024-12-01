import MovieCard from "./MovieCard";
import "../movies.css";
function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for something else!</p>;
  }

  return (
    <ul className="movieList">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
