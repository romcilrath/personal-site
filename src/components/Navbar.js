import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
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

export default Navbar