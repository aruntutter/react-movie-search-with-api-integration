import React from "react";
import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="main">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))
      ) : (
        <div className="empty">
          <h2>Search not found 🙁</h2>
        </div>
      )}
    </div>
  );
};

export default MovieList;
