import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster_path, vote_average, overview }) => {
  const img_Url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
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
