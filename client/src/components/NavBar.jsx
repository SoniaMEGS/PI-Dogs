import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Searcher from "./Searcher";
import "../style/NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navBar">
      <ul className="navBar_list">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/form">Create dog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
