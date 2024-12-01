import MovieList from "./MovieList";
import { useState, useEffect, useRef } from "react";
function MovieSearch() {
  const [query, setQuery] = useState("");
  const inputEl = useRef(null);
  return (
    <div>
      <input
        type="text"
        placeholder="Search classes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieList query={query} setQuery={setQuery} />
    </div>
  );
}

export default MovieSearch;
