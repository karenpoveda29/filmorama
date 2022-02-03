export const loginUser = ({email , password}) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("filmorama-userIsLoggedIn", true)
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
};

export const isUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.getItem("filmorama-userIsLoggedIn"));
    } catch (error) {
      reject(error);
    }
  }); 
};

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("filmorama-userIsLoggedIn", false)
      resolve();
    } catch (error) {
      reject(error);
    }
  }); 
};