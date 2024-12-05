import MovieCard from "./MovieCard";
import "../movies.css";
function MovieList({ movies, addToWishlist, inWishlist }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for something else!</p>;
  }

  return (
    <ul className="movieList">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          inWishlist={inWishlist}
          addToWishlist={addToWishlist}
        />
      ))}
    </ul>
  );
}

export default MovieList;
