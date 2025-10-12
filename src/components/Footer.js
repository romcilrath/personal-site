import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.scss"

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
            <EmailIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
        </div>
        <p> &copy; 2025 www.robmcilrath.com</p>
    </div>
  )
}

export default Footer