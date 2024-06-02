import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="NavBar">
        <li className="Navitem">
          <Link to="/">Home</Link>
        </li>
        <li className="Navitem">
          <Link to="/about">About</Link>
        </li>
        <li className="Navitem">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="Navitem">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="Navitem">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
