import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

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
    <nav>
      <h1>
        <Link to="/">Filmorama</Link>
      </h1>
      <ul>
        <li>
          {userIsLoggedIn ? (
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <Link to={LOGIN}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
