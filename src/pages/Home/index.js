import { useState, useEffect } from "react";
import "./home.css";

//Components
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";

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
  const [searchTerm, setSearchTerm] = useState("");

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
  const handleRemoveFavorite = (movieId) => {
    removeFavoriteMovie(movieId).then((favoriteMovies) =>
      setFavoriteMovies(favoriteMovies)
    );
  };

  const handleSearchTerm = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

  const bySearchTerm = (movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());   
  };

  const moviesToShow = movies.filter(bySearchTerm);

  return (
    <section className="home-page">
      <div className="home-header">
        <h2>Top Rated Movies</h2>
        <SearchBox searchTerm={searchTerm} onSearchTerm={handleSearchTerm}/>
      </div>

      <Pagination
        page={page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
      <ul className="cards-container">
        {moviesToShow.length === 0 && searchTerm !== "" && <p className="info-message">No movies match the search</p>}
        {moviesToShow?.map((movie) => (
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
    </section>
  );
};

export default Home;
