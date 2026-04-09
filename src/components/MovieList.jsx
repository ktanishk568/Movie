import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MovieList;