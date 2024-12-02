function MovieDelete({ movie }) {
    // TODO: delete the associate wishlist card when button is pressed
    
    const removeMovie = (id) => {
      let movieIDs = localStorage.getItem("movies");
  
      if (movieIDs == null) {
        movieIDs = [];
      } else {
        movieIDs = movieIDs.split(",");
      }
      
      movieIDs = movieIDs.filter((movieID) => movieID != id);

      localStorage.setItem("movies", movieIDs);
    };
  
    return (
      <div>
        <button
          className="deleteBtn"
          onClick={() => {
            removeMovie(movie.imdbID);
          }}
        >
          ×
        </button>
      </div>
    );
  }
  
  export default MovieDelete;
  