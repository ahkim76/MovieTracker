function MovieAdd({ movie }) {
  const addMovie = (id) => {
    let movies = [localStorage.getItem("movies").split(",")];

    if (movies == null) {
      movies = [];
    }
    // movies = []

    movies = [id, ...movies];

    localStorage.setItem("movies", movies);
  };

  return (
    <div>
      <button
        className="addBtn"
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
