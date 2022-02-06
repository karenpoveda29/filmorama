import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Services
import { getMovieDetails } from "../../services";

//Constants
import { IMAGE_URL } from "../../constants/urls";

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails(movieId).then((details) => {
      setMovieDetails(details);
    });
  }, [movieId]);

  return (
    <section>
      <img
        src={`${IMAGE_URL}${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <h2>{movieDetails.title}</h2>
      <div>
        <p>Genres:</p>
        <ul>
          {movieDetails.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <p>{movieDetails.overview}</p>
      <p>{`Duration: ${movieDetails.runtime}`}</p>
      <p>
        {movieDetails.vote_average}
        <span>/10</span>
      </p>
    </section>
  );
};

export default Details;
