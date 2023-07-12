import "./NavBar.css";
//import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
