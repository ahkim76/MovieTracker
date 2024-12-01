import { useState, useEffect, useRef } from "react";

function MovieAdd({ movie }) {

  const addMovie = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/movies`, {
            method: 'POST',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
      console.log("Error adding movie");
    }
  };

  return (
    <div>
        <button onClick={addMovie(movie.imdbID)}></button>
    </div>
  )

}

export default MovieAdd;
