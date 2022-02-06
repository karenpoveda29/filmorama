import { useEffect } from 'react';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

//Components
import Header from "./components/Header"
import Navigation from "./components/Navigation"

//Services
import { isUserLoggedIn } from "./services"

//Constants
import { LOGIN } from "./constants/routes"

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn().then(userIsLoggedIn => {
      if(!userIsLoggedIn && location.pathname !== "login"){
        navigate(LOGIN);
      }
    })
  }, [location.pathname, navigate]);

  return (
    <>
      {location.pathname !== LOGIN && <Header />}
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path= {LOGIN} element={<Login />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {location.pathname !== LOGIN && <Navigation />}
    </> 
  );
}

export default App;

