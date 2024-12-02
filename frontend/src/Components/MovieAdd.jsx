function MovieAdd({ movie }) {
  const addMovie = (id) => {
    let movies = [localStorage.getItem("movies")];

    if (movies == null) {
        movies = [];
    }

    movies = [id, ...movies];

    localStorage.setItem("movies", movies);
    console.log(localStorage.getItem("movies"));
  }

  return (
    <div>
      <button onClick={() => { addMovie('tt6710474') } }>Add to wishlist</button>
    </div>
  );
}

export default MovieAdd;
