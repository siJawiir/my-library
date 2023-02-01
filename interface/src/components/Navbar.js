import React from "react";
import '../styles/Navbar.css'
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar justify-content-end">
      <i className="bi bi-search"></i>
        <div className="nav">
        <form className="search-bar">
          <input className="form-control border-0" type="search" placeholder="Search" />
        </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
