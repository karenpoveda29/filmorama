import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

//Services
import { isUserLoggedIn, logoutUser } from "../../services";

//Constants
import { LOGIN } from "../../constants/routes"

const Header = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    isUserLoggedIn().then((res) => {
      setUserIsLoggedIn(res);
    });
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser().then(() => {
      navigate(LOGIN)
    })
  };

  return (
    <nav className="header">
      <h1 className="header__title">Filmorama</h1>
          {userIsLoggedIn &&
            <button className="header__logout-btn" type="button" onClick={handleLogout}>
              Log out
            </button>
          }
    </nav>
  );
};

export default Header;
