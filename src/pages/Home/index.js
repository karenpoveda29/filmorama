import React, { useState, useEffect } from "react";
import "./home.css";

//Components
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

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
      <Pagination
        page={page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
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
      <Pagination
        page={page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default Home;
