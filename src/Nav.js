import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/useState" className="navLink">
        useState
      </Link>
      <Link to="/useEffect" className="navLink">
        useEffect (imperative)
      </Link>
      <Link to="/listener" className="navLink">
        useEffect (listener)
      </Link>
      <Link to="/useReducer" className="navLink">
        useReducer
      </Link>
      <Link to="/useRefI" className="navLink">
        useRef (DOM)
      </Link>
      <Link to="/useRefII" className="navLink">
        useRef (arbitrary)
      </Link>
    </nav>
  );
}
