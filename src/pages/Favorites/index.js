import { useState, useEffect } from "react";

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
    <section>
      <h2>Your favorites</h2>
      <ul>
        {favoriteMovies.length === 0 && <p className="info-message">There are no favorite movies</p>}
        {favoriteMovies?.map((favoriteMovie) => (
          <MovieCard
            key={favoriteMovie.id}
            id={favoriteMovie.id}
            posterPath={favoriteMovie.poster_path}
            title={favoriteMovie.title}
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
