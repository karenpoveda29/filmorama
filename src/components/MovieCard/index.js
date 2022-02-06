//Constants
import { POSTER_URL } from "../../constants/urls";

//Icons
import { BsHeartFill, BsHeart } from "react-icons/bs";

const MovieCard = ({
  id,
  posterPath,
  title,
  voteAverage,
  isOnFavoriteMovies,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  return (
    <li>
      <img src={`${POSTER_URL}${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>{voteAverage}</p>
      {isOnFavoriteMovies ? (
        <BsHeartFill
          onClick={() => {
            onRemoveFavorite(id);
          }}
        />
      ) : (
        <BsHeart
          onClick={() => {
            onAddFavorite(id);
          }}
        />
      )}
    </li>
  );
};

export default MovieCard;
