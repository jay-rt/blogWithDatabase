import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DAILY JOURNAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
