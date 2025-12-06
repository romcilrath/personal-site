import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.scss"

function Footer() {
  return (
    <div className="footer">
    <div className='socialMedia'>
      <a href="mailto:romcilrath@gmail.com" aria-label="Email" title="Email" className="icon-link">
        <EmailIcon />
      </a>
      <a href="https://www.linkedin.com/in/robert-mcilrath/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="icon-link">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/romcilrath" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="icon-link">
        <GitHubIcon />
      </a>
    </div>
        <p> &copy; 2025 www.robmcilrath.com</p>
    </div>
  )
}

export default Footer