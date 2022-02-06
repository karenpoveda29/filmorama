import { Link, useLocation } from "react-router-dom";
import { BsFillBookmarkHeartFill, BsFillCameraReelsFill } from "react-icons/bs";
import "./navigation.css";

const Navigation = () => {
  const location = useLocation();

  /* const isHomeActive = () => {
    return (location.pathname === "/"); 
  };

  const isFavoritesActive = () => {
    return (location.pathname === "/favorites");
  }; */

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link className={`navbar__link ${location.pathname === "/" && "active"}`} to="/">
          <li className="navbar__list-item">
            <BsFillCameraReelsFill className="navbar__icon" />
            <span>Home</span>
          </li>
        </Link>
        <Link className={`navbar__link ${location.pathname === "/favorites" && "active"}`} to="/favorites">
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
