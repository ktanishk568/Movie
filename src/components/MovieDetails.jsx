import React, { useEffect, useState } from "react";

const API_KEY = "70dbcea0";

function MovieDetails({ imdbID, onClose }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [imdbID]);

  if (!movie) return <div className="modal">Loading...</div>;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <h2>{movie.Title}</h2>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p>Arpit Himanshu</p>
      </div>
    </div>
  );
}

export default MovieDetails;