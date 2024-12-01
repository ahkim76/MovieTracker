function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found. Try searching for something else!</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>Genre: {movie.Type}</p>
          <img src={movie.Poster} alt={`${movie.Title} movie poster`} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
