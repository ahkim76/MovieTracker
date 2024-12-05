function MovieDelete({ movie, onRemove }) {
  return (
    <div>
      <button
        className="deleteBtn"
        onClick={() => {
          onRemove(movie.imdbID);
        }}
      >
        ×
      </button>
    </div>
  );
}

export default MovieDelete;
