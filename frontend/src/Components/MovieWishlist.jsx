import WishlistCard from "./WishlistCard";
import { useState, useEffect, useCallback } from "react";
import "../movies.css";

function MovieWishlist() {
  const getMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/movies/id/${id}`);

      if (response.ok) {
        const data = await response.json();

        return data;
      } else {
        console.error("Error retrieving movie");
      }
    } catch (error) {
      console.log("Error fetching movies");
    }
  };

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        let movieData = [];
        let movieIDs = localStorage.getItem("movies").split(",");
    
        if (movieIDs != null ) {
          for (let id of movieIDs) {
            let data = await getMovie(id);
    
            movieData.push(data);
          }
        }
    
        setMovieData(movieData);
      };

      getMovies();
  }, []);  

  if (movieData.length === 0) {
    return "Wishlist empty. Search for a movie to add to your wishlist!";
  }

  return (
    <ul className="wishlistParent">
      {movieData.map((movie) => (
        <WishlistCard movie={movie} />
      ))}
    </ul>
  );
}

export default MovieWishlist;
