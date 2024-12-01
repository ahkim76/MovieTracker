import MovieCard from "./MovieCard";
function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for something else!</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
