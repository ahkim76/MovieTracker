import MovieList from "./MovieList";
import { useState, useEffect, useRef } from "react";
function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const inputEl = useRef(null);

  const fetchMovies = async () => {
    if (!query || query.length <= 2) {
      setMovies([]);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:4000/movies/title/${query}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } else {
        console.error(`Error: ${response.status}`);
        setMovies([]);
      }
    } catch (error) {
      console.log("Error fetching movies");
    }
  };

  const inWishlist = (movie) => {
    if (movie == null) {
      return false;
    }
    
    let movies = localStorage.getItem("movies");

    if (movies == null || movies.length == 0) {
      movies = [];
    } else {
      movies = movies.split(",");
    }

    let inWishlist = false;
    if (movies.includes(movie)) {
      inWishlist = true;
    }

    movies.forEach((id) => {
      if (movie.imdbID == id) {
        inWishlist = true;
      }
    });

    return inWishlist;
  }


  useEffect(() => {
    fetchMovies();
  }, [query]);
  
  return (
    <div>
      <h2>Search for movies!</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default MovieSearch;
