import { Link, useLocation } from "react-router-dom";
import "./navigation.css";

//Icons
import { BsFillBookmarkHeartFill, BsFillCameraReelsFill } from "react-icons/bs";

const Navigation = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === "/";
  const isFavoritesActive = location.pathname === "/favorites";

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link className={`navbar__link ${isHomeActive && "active"}`} to="/">
          <li className="navbar__list-item">
            <BsFillCameraReelsFill className="navbar__icon" />
            <span>Home</span>
          </li>
        </Link>
        <Link className={`navbar__link ${isFavoritesActive && "active"}`} to="/favorites">
          <li className="navbar__list-item">
            <BsFillBookmarkHeartFill className="navbar__icon" />
            <span>Favorites</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
