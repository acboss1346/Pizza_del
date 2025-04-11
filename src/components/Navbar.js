import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo" />
      </div>

      <div className={`links ${showLinks ? "show" : ""}`}>
        <Link to="/" onClick={() => setShowLinks(false)}>Home</Link>
        <Link to="/menu" onClick={() => setShowLinks(false)}>Menu</Link>
        <Link to="/about" onClick={() => setShowLinks(false)}>About</Link>
        <Link to="/contact" onClick={() => setShowLinks(false)}>Contact</Link>
      </div>

      <button className="toggleButton" onClick={handleToggle}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;
