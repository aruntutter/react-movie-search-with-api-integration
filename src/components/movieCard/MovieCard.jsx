import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  const { title, poster_path, vote_average, overview } = movie;
  const img_Url = "https://image.tmdb.org/t/p/w500";

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`${img_Url}${poster_path}`} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getColor(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

export default MovieCard;
