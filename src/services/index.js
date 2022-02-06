const FILMORAMA_LOGGED_IN_KEY = "filmorama-userIsLoggedIn"
const FILMORAMA_FAVORITE_MOVIES = "filmorama-favorite-movies";

export const loginUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const validEmail = process.env.REACT_APP_VALID_EMAIL;
    const validPassword = process.env.REACT_APP_VALID_PASSWORD;
    console.log('validEmail:', validEmail)
    console.log('validPassword:', validPassword)
    
    if (email !== validEmail || password !== validPassword) {
      reject("Invalid user");
      return;
    }
    try {
      localStorage.setItem(FILMORAMA_LOGGED_IN_KEY, true);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const isUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.getItem(FILMORAMA_LOGGED_IN_KEY));
    } catch (error) {
      reject(error);
    }
  });
};

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(FILMORAMA_LOGGED_IN_KEY);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const getMovies = ({ page }) => {
  const apiKey = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
};

export const getMovieDetails = (movieId) => {
  const apiKey = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  )
    .then((res) => res.json());
};

export const getFavoriteMovies = () => {
  return new Promise((resolve, reject) => {
    const favoriteMovies = JSON.parse(
      localStorage.getItem(FILMORAMA_FAVORITE_MOVIES) ?? "[]"
    );
    resolve(favoriteMovies);
  });
};

export const addFavortieMovie = (movie) => {
  return new Promise((resolve, reject) => {
    const favoriteMovies = JSON.parse(
      localStorage.getItem(FILMORAMA_FAVORITE_MOVIES) ?? "[]"
    );
    const updatedFavoriteMovies = [...favoriteMovies, movie];
    localStorage.setItem(
      FILMORAMA_FAVORITE_MOVIES,
      JSON.stringify(updatedFavoriteMovies)
    );
    resolve(updatedFavoriteMovies);
  });
};

export const removeFavoriteMovie = (movieId) => {
  return new Promise((resolve, reject) => {
    const favoriteMovies = JSON.parse(
      localStorage.getItem(FILMORAMA_FAVORITE_MOVIES) ?? "[]"
    );
    const updatedFavoriteMovies = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.id !== movieId
    );
    localStorage.setItem(
      FILMORAMA_FAVORITE_MOVIES,
      JSON.stringify(updatedFavoriteMovies)
    );
    resolve(updatedFavoriteMovies);
  });
};