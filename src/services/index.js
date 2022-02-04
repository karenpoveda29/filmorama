const FILMORAMA_LOGGED_IN_KEY = "filmorama-userIsLoggedIn"

export const loginUser = ({email , password}) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(FILMORAMA_LOGGED_IN_KEY, true)
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
      localStorage.removeItem(FILMORAMA_LOGGED_IN_KEY)
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
};