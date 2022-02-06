import React, { useState, useEffect } from "react";
import "./home.css";

//Components
import MovieCard from "../../components/MovieCard";

//Services
import { getMovies } from "../../services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies({ page }).then((movies) => setMovies(movies));
  }, [page]);

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="home-page">
      <h2>Top Rated Movies</h2>
      <button type="button" disabled={page === 1} onClick={handlePreviousPage}>
        Previous
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>
      <ul>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
