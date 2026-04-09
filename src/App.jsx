import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const API_KEY = "70dbcea0";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!query) return;

    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch(err => console.log(err));
  }, [query]);

  return (
    <div className="app">
      <h1>Movie Review</h1>

      <SearchBar setQuery={setQuery} />

      <MovieList movies={movies} onSelect={setSelectedMovie} />

      {selectedMovie && (
        <MovieDetails
          imdbID={selectedMovie.imdbID}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;