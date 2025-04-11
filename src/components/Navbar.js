import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Pizza Logo" />
      </div>

      <div className="rightSide">
        <div className={`links ${openLinks ? "show" : ""}`}>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
        <button onClick={toggleNavbar} className="toggleButton">
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
