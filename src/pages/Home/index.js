import React, { useState, useEffect } from "react";
import "./home.css";

//Components
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

//Services
import {
  getMovies,
  addFavortieMovie,
  removeFavoriteMovie,
  getFavoriteMovies,
} from "../../services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    getFavoriteMovies().then((favoriteMovies) => {
      setFavoriteMovies(favoriteMovies);
    });
  }, []);

  useEffect(() => {
    getMovies({ page }).then((movies) => setMovies(movies));
  }, [page]);

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handleAddFavorite = (movieId) => {
    const movieDetails = movies.find((movie) => movie.id === movieId);
    addFavortieMovie(movieDetails).then((favoriteMovies) =>
      setFavoriteMovies(favoriteMovies)
    );
  };
  const handleRemoveFavorite = (movie) => {
    removeFavoriteMovie(movie).then((favoriteMovies) =>
      setFavoriteMovies(favoriteMovies)
    );
  };

  return (
    <div className="home-page">
      <h2>Top Rated Movies</h2>
      <Pagination
        page={page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
      <ul>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            isOnFavoriteMovies={
              favoriteMovies.find(
                (favoriteMovie) => favoriteMovie.id === movie.id
              ) !== undefined
            }
            onAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </ul>
      <Pagination
        page={page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default Home;
