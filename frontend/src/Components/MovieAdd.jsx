function MovieAdd({ movie }) {
  const addMovie = (id) => {
    let movies = localStorage.getItem("movies");

    if (movies == null) {
      movies = [];
    } else {
      movies = movies.split(",");
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
