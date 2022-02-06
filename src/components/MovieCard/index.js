//Constants
import { POSTER_URL } from "../../constants/urls"
 
const MovieCard = ({posterPath, title, voteAverage}) => {
  return (
    <li>
      <img src={`${POSTER_URL}${posterPath}`} alt={title}/>
      <h3>{title}</h3>
      <p>{voteAverage}</p>
    </li>
  )
};

export default MovieCard;