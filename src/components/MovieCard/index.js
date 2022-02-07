import { Link } from "react-router-dom";
import "./movie-card.css";

//Constants
import { IMAGE_URL } from "../../constants/urls";

//Icons
import { BsHeartFill, BsHeart } from "react-icons/bs";

const MovieCard = ({
  id,
  posterPath,
  title,
  releaseDate,
  voteAverage,
  isOnFavoriteMovies,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  return (
    <li className="card">
      <Link to={`/details/${id}`}>
        <img
          src={`${IMAGE_URL}${posterPath}`}
          alt={title}
          className="card__image"
        />
      </Link>
      <div className="card__info">
        <h3 className="card__info-movie-title">{title}</h3>
        <p className="card__info-release-date">Release date: <span>{releaseDate}</span></p>
        <p className="card__info-score">
          {voteAverage}
          <span>/10</span>
        </p>
        {isOnFavoriteMovies ? (
          <BsHeartFill
            className="card__favorite-btn"
            onClick={() => { 
              onRemoveFavorite(id);
            }}
          />
        ) : (
          <BsHeart
            className="card__favorite-btn"
            onClick={() => {
              onAddFavorite(id);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default MovieCard;
