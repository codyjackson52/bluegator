import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Lizard Labs
          </Link>
          <nav className="nav">
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/industries" className="nav-link">
              Industries
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <Link to="/contact" className="button">
              Request a Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
