function MovieAdd({ movie }) {
  const addMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/movies`, {
        method: "POST",
        body: JSON.stringify({id}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Added movie with id " + id);
    } catch (error) {
      console.log("Error adding movie");
    }
  };

  return (
    <div>
      <button onClick={() => { addMovie('tt6710474') } }>Add to wishlist</button>
    </div>
  );
}

export default MovieAdd;
