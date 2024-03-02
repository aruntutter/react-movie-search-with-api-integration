import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search-icon.svg";

const Navbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleSearchIconClick = () => {
    if (searchTerm.trim() !== "") {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Search-Icon" />
      </div>

      {/* Search Bar */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={handleSearchIconClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
