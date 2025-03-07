import React, { Component } from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import headshot from '../images/Me.png'; // Import the headshot image
import "../styles/Home.css"; // Ensure the updated CSS file is imported

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="about">
          <img className="headshot" src={headshot} alt="Me" /> {/* Reference the imported image */}
          <h2>Hi, I'm Robert McIlrath</h2>
          <div className="prompt">
            <p>
              I love solving problems, exploring new tech, and building systems that make life easier. 
              I’m all about automating tasks and using AI to create smarter workflows.
            </p>
            <EmailIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
          </div>
        </div>
        <div className="skills">
          <ol className="list">
            <li className="item">
              <h2>Languages</h2>
              <span>Python, C#, Java, HTML/CSS, JavaScript, C, R, Windows Batch Script, SQL</span>
            </li>
            <li className="item">
              <h2>Technologies</h2>
              <span>Android SDK, Android Studio, ADB, SSH</span>
            </li>
            <li className="item">
              <h2>Frameworks and Libraries</h2>
              <span>OpenAI, Numpy, Celery, Robot, TKinter, MySQL, PostgreSQL, MongoDB, Elastic Search, ExpressJS, Angular, React, Node, Google APIs, Jira API, Flask</span>
            </li>
            <li className="item">
              <h2>Tools</h2>
              <span>Git, Gerrit, Jira, Postman, Polarion, Jenkins, Docker, Power Automate</span>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Home;