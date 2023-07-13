import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="navGlobal">
        <ul className="liste">
          <li className="items">
          <Link to="/">Home</Link>
          </li>
          <li className="items">
          <Link to="/adventure">Adventure</Link>
          </li>
          <li className="items">
          <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
