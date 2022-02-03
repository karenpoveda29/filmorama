import { Link } from "react-router-dom";

const Header = () => {
  return ( 
      <nav>
        <h1><Link to="/">Filmorama</Link></h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Header;