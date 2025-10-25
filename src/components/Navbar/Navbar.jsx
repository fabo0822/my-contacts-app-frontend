import React from "react";
import logoImagen from "../../assets/globant.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logoImagen} alt="Logo" className="logo" />
      <ul className="tabs">
        <li>Overview</li>
        <li>Contacts</li>
        <li>Favorites</li>
      </ul>

      <button className="new-button">+ NEW</button>
    </nav>
  );
};

export default Navbar;