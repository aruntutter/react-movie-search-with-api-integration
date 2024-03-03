import React from "react";
import "./MovieView.css";
import CloseIcon from "../../assets/close-x.png";

const MovieView = ({ movie, onClose }) => {
  const img_Url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-view-wrapper">
      <div className="movie-view">
        <div className="close-icon" onClick={onClose}>
          <img src={CloseIcon} alt="Close Icon" />
        </div>
        <div className="movie-poster">
          <img src={`${img_Url}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info-text">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="date-vote">
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
