function MovieAdd({ movie }) {
  const addMovie = (id) => {
    let movies = [localStorage.getItem("movies")];

    if (movies == null) {
      movies = [];
    }

    movies = [id, ...movies];

    localStorage.setItem("movies", movies);
    console.log(localStorage.getItem("movies").split(","));
  };

  return (
    <div>
      <button
        onClick={() => {
          addMovie(movie.imdbID);
        }}
      >
        Add to wishlist
      </button>
    </div>
  );
}

export default MovieAdd;
