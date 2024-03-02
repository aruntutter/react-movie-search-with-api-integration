import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search-icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Search-Icon" />
      </div>

      {/* Search Bar */}
      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search icon" />
      </div>
    </div>
  );
};

export default Navbar;
