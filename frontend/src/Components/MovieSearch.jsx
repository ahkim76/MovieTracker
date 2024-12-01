import MovieList from "./MovieList";
import { useState, useEffect, useRef } from "react";
function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const inputEl = useRef(null);

  const fetchMovies = async () => {
    if (!query) {
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
  useEffect(() => {
    fetchMovies();
  }, [query]);
  return (
    <div>
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
