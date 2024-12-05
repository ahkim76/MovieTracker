import MovieList from "./MovieList";
import { useState, useEffect, useRef } from "react";
function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState(() => {
    const storedMovies = localStorage.getItem("movies");
    return storedMovies ? storedMovies.split(",") : [];
  });

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

  const addToWishlist = (id) => {
    if (!savedMovies.includes(id)) {
      const updatedMovies = [...savedMovies, id];
      setSavedMovies(updatedMovies);
      localStorage.setItem("movies", updatedMovies.join(","));
    }
  };

  const inWishlist = (movie) => savedMovies.includes(movie.imdbID);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <MovieList
        movies={movies}
        addToWishlist={addToWishlist}
        inWishlist={inWishlist}
      />
    </div>
  );
}

export default MovieSearch;
