import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavBar] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(100);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = Math.max(50, 100 - window.scrollY / 2);
      setNavbarHeight(newHeight);
      document.documentElement.style.setProperty('--navbar-height', `${newHeight}px`);
    };

    // set initial CSS var so navbar starts at full size
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "closed"}> 
      <button 
        className="navbarToggleButton"
        onClick={ () => { setExpandNavBar((prev) => !prev); } }
      >
      <ReorderIcon /> 
      </button>
      <div className="navbarLinksDiv">
          <Link to="/" className="navbarLink"> Home </Link>
          <Link to="/projects" className="navbarLink"> Projects </Link>
          <Link to="/experience" className="navbarLink"> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar;