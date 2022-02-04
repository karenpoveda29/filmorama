import React, { useState, useEffect } from 'react';


//Services
import { getMovies } from "../../services"

const POSTER_URL = "https://image.tmdb.org/t/p/w185/";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies({page: 1}).then(movies => setMovies(movies))
  }, [])
  

  return (
    <div>
      <h2>Top Rated Movies</h2>
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