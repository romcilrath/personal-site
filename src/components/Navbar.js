import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import MenuIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  const links = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className={`navbar ${visible ? "navbar--visible" : ""} ${menuOpen ? "navbar--open" : ""}`}>
      <a href="#top" className="navbar__brand" onClick={handleClick}>RM</a>
      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className="navbar__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="navbar__link" onClick={handleClick}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;