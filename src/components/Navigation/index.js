import { Link } from "react-router-dom";
import { BsFillBookmarkHeartFill, BsFillCameraReelsFill } from "react-icons/bs";
import "./navigation.css";

 const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <BsFillCameraReelsFill color="#ddd1ff" size="2rem"/>
          <Link className="navbar__link" to="/">Home</Link>
        </li>
        <li className="navbar__list-item">
          <BsFillBookmarkHeartFill color="#ddd1ff" size="2rem"/>
          <Link className="navbar__link" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 