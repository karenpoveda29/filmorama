import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./details.css"

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
    <section className="details">
      <h2 className="details__title">Movie Details</h2>
      <div className="details__card">
        <img
          className="details__card-image"
          src={`${IMAGE_URL}${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />

        <div className="details__card-info">
          <h2 className="details__card-title">{movieDetails.title}</h2>
          <div className="details__card-genres">
            <p>Genres:</p>
            <div className="details__card-genres-box">
              {movieDetails.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
                ))}
            </div>
          </div>
          <p className="details__card-duration">Duration: <span>{movieDetails.runtime} min</span></p>
          <p className="details__card-overview">{movieDetails.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
