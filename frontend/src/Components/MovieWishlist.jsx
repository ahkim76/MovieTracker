import WishlistCard from "./WishlistCard";
import { useState, useEffect, useCallback } from "react";
import "../movies.css";

function MovieWishlist() {
  const getMovieIDs = async () => {
    try {
      const response = await fetch(`http://localhost:4000/movies`);

      if (response.ok) {
        let movieIDs = await response.json();

        return movieIDs;
      } else {
        console.log("Error fetching movies");
      }
    } catch (error) {
      console.log("Error getting movies");
    }
  };

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

  const getMovies = useCallback(async () => {
    let movieData = [];
    let movieIDs = await getMovieIDs();

    if (movieIDs != null) {
      for (let id of movieIDs) {
        let data = await getMovie(id);

        movieData.push(data);
      }
    }

    return movieData;
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (getMovies.length === 0) {
    return "Wishlist empty. Search for a movie to add to your wishlist!";
  }

  return (
    <ul className="wishlistParent">
      {getMovies.map((movie) => (
        <WishlistCard movie={movie} />
      ))}
    </ul>
  );
}

export default MovieWishlist;
