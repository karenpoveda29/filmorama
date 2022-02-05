import { Link } from "react-router-dom";
import { BsFillBookmarkHeartFill, BsFillCameraReelsFill } from "react-icons/bs";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link className="navbar__link" to="/">
          <li className="navbar__list-item">
            <BsFillCameraReelsFill className="navbar__icon" />
            <span>Home</span>
          </li>
        </Link>
        <Link className="navbar__link" to="/favorites">
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
