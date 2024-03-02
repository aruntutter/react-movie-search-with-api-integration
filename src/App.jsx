import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import MovieView from "./components/movieView/MovieView";

const apiKey = "api_key=f741ac48cd013b413e892b2a09ccf12c";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const searchUrl = `${baseUrl}/search/movie?${apiKey}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies(apiUrl);
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      getMovies(`${searchUrl}&query=${searchTerm}`);
    } else {
      getMovies(apiUrl);
    }
  };

  return (
    <div>
      <Navbar onSubmit={handleSearch} />

      {selectedMovie ? (
        <MovieView movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default App;
