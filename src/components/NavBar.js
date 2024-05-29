// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul className="NavBar">
        <li class="Navitem">
          <a>Home</a>
        </li>
        <li class="Navitem">
          <a>About</a>
        </li>
        <li class="Navitem">
          <a>Projects</a>
        </li>
        <li class="Navitem">
          <a>Contact</a>
        </li>
        <li class="Navitem">
          <a>Resume</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
