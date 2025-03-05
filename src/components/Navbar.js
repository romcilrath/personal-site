import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
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
      document.documentElement.style.setProperty('--navbar-height', newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${navbarHeight < 100 ? 'small' : ''}`} id={expandNavbar ? "open" : "close"} style={{ height: `${navbarHeight}px` }}>
        <div className="toggleButton">
          <button 
            onClick={ () => { 
              setExpandNavBar((prev) => !prev);
            }}
          >
            <ReorderIcon /> 
          </button>
        </div>
        <div className="links">
            <Link to="/" className="linkText"> Home </Link>
            <Link to="/projects" className="linkText"> Projects </Link>
            <Link to="/experience" className="linkText"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar;