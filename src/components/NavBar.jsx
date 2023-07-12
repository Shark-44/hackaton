import "./Navbar.css";

//import React from "react";
//import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/adventure">Adventure</Link>
          </li>
          <li>
          <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
