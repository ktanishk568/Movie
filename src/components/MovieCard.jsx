import React from "react";

function MovieCard({ movie, onSelect }) {
  const image =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/200";

  return (
    <div className="card" onClick={() => onSelect(movie)}>
      <img src={image} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;