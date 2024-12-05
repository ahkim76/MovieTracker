function MovieAdd({ movie, isSaved, addToWishlist }) {
  return (
    <div>
      <button
        className={`addBtn ${isSaved ? "saved" : "new"}`}
        onClick={() => addToWishlist(movie.imdbID)}
        disabled={isSaved} // Prevent re-adding
      >
        {isSaved ? "Added to wishlist" : "Add to wishlist"}
      </button>
    </div>
  );
}

export default MovieAdd;
