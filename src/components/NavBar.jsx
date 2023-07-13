import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navGlobal">
      <ul className="liste">
        <li className="items">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </li>
        <li className="items">
          <NavLink className="navlink" to="/adventure">
            Adventure
          </NavLink>
        </li>
        <li className="items">
          <NavLink className="navlink" to="/store">
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
