import React, { useState, useEffect } from 'react';
import "./home.css";

//Services
import { getMovies } from "../../services"

const POSTER_URL = "https://image.tmdb.org/t/p/w185/";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    getMovies({ page }).then(movies => setMovies(movies))
  }, [page])
  
  const handlePreviousPage = () => {
    setPage(page => page - 1)
  };
  const handleNextPage = () => {
    setPage(page => page + 1)
  };

  return (
    <div className="home-page">
      <h2>Top Rated Movies</h2>
      <button type="button" disabled={page === 1} onClick={handlePreviousPage}>Previous</button>
      <button type="button" onClick={handleNextPage}>Next</button>
      <ul>
        {movies?.map(movie => <li key={movie.id}>
          <img src={`${POSTER_URL}${movie.poster_path}`} alt={movie.title}/>
          <h3>{movie.title}</h3>
          </li>)}
      </ul>
    </div>
  );
}

export default Home;