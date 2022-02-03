import { useEffect } from 'react';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";

//Components
import Header from "./components/Header"

//Services
import { isUserLoggedIn } from "./services"

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn().then(userIsLoggedIn => {
      if(!userIsLoggedIn && location.pathname !== "login"){
        navigate("/login");
      }
    })
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </> 
  );
}

export default App;

