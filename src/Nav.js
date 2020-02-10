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
        useEffect
      </Link>
      <Link to="/listener" className="navLink">
        listener
      </Link>
    </nav>
  );
}
