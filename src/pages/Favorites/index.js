import { useState, useEffect } from "react";
import "./favorites.css"

//Services
import { getFavoriteMovies, removeFavoriteMovie } from "../../services";

//Components
import MovieCard from "../../components/MovieCard";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    getFavoriteMovies().then((favoriteMovies) => {
      setFavoriteMovies(favoriteMovies);
    });
  }, []);

  const handleRemoveFavorite = (movieId) => {
    removeFavoriteMovie(movieId).then((favoriteMovies) =>
      setFavoriteMovies(favoriteMovies)
    );
  };

  return (
    <section className="favorites">
      <h2 className="favorites__title">Your favorites</h2>
      <ul className="cards-container">
        {favoriteMovies.length === 0 && <p className="info-message">There are no favorite movies</p>}
        {favoriteMovies?.map((favoriteMovie) => (
          <MovieCard
            key={favoriteMovie.id}
            id={favoriteMovie.id}
            posterPath={favoriteMovie.poster_path}
            title={favoriteMovie.title}
            releaseDate={favoriteMovie.release_date.slice(0, 4)}
            voteAverage={favoriteMovie.vote_average}
            isOnFavoriteMovies={true}
            onRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </ul>
    </section>
  );
};

export default Favorites;
