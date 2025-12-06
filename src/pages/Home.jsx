import React, { Component } from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import headshot from '../images/Me.png'; // Import the headshot image
import "../styles/Home.scss"; // Ensure the updated SCSS file is imported

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
      typingComplete: false,
    };
    this._timers = [];
  }

  componentDidMount() {
    // Clear any existing timers (handles HMR/StrictMode remounts) and reset text
    this._timers.forEach(t => clearTimeout(t));
    this._timers = [];
    this.setState({ typedText: '', typingComplete: false });

    // Respect reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const full = "Hi, I'm Rob McIlrath";
    const firstPart = full.slice(0, 2); // "Hi"
    const rest = full.slice(2); // ", I'm Rob McIlrath"
    const charDelay = prefersReduced ? 0 : 65; // ms per char (approx 2x slower)
    const pauseAfterHi = prefersReduced ? 0 : 900; // solid pause after "Hi"

    // helper to type a string into state (safe: use charAt to avoid 'undefined')
    const typeString = (str, onDone) => {
      if (!str) { if (onDone) onDone(); return; }
      let i = 0;
      const tick = () => {
        const ch = str.charAt(i) || '';
        this.setState(prev => ({ typedText: prev.typedText + ch }));
        i += 1;
        if (i < str.length) {
          this._timers.push(setTimeout(tick, charDelay));
        } else if (onDone) {
          onDone();
        }
      };
      tick();
    };

    if (prefersReduced) {
      // Immediately show full text and mark complete
      this.setState({ typedText: full, typingComplete: true });
      return;
    }

    // Type "Hi", pause, then type the rest
    typeString(firstPart, () => {
      this._timers.push(setTimeout(() => {
        typeString(rest, () => {
          this.setState({ typingComplete: true });
        });
      }, pauseAfterHi));
    });
  }

  componentWillUnmount() {
    this._timers.forEach(t => clearTimeout(t));
    this._timers = [];
  }

  render() {
    const { typedText, typingComplete } = this.state;
    const aboutClass = `about${typingComplete ? ' typing-complete' : ''}`;

    return (
      <div className="home">
        <div className={aboutClass}>
          <img className="headshot" src={headshot} alt="Me" /> {/* Reference the imported image */}
          <h2 aria-label="Hi, I'm Rob McIlrath"><span className="typewriter" aria-hidden="true">{typedText}</span></h2>
          <div className="prompt">
            <p>
              I love solving problems, exploring new tech, and building systems that make life easier. 
              I'm all about automating tasks and using AI to create smarter workflows.
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
    );
  }
}

export default Home;