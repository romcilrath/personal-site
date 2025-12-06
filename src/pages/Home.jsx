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
      imgLoaded: false,
      headshotRevealed: false,
    };
    this._timers = [];
    this._pendingContinue = null; // function to call when image loads to continue typing
    this._pendingReveal = null; // function to call when image loads to reveal headshot
  }

  componentDidMount() {
    // Clear any existing timers (handles HMR/StrictMode remounts) and reset text
    this._timers.forEach(t => clearTimeout(t));
    this._timers = [];
    this.setState({ typedText: '', typingComplete: false });

    // Respect reduced motion preference
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const full = "Hi, I'm Rob McIlrath";
  // user requested: type "Hi" first (no comma), small pause, reveal headshot, then type the rest
  const firstPart = 'Hi';
  const rest = full.slice(firstPart.length);
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

    // Type the first chunk ("Hi") then: small pause -> reveal headshot -> small pause -> type rest
    typeString(firstPart, () => {
      if (prefersReduced) {
        // reduced motion: show full text immediately
        typeString(rest, () => this.setState({ typingComplete: true }));
        return;
      }

      // small pause after "Hi"
      const pauseAfterHi = 300; // ms

      const revealThenContinue = () => {
        // Reveal the headshot (will trigger animation when both revealed & loaded)
        const doReveal = () => {
          this.setState({ headshotRevealed: true });
          // small pause after reveal animation starts before typing continues
          this._timers.push(setTimeout(() => {
            typeString(rest, () => {
              // Very small pause before marking typing complete (pronunciation guide will appear immediately)
              this._timers.push(setTimeout(() => {
                this.setState({ typingComplete: true });
              }, 100));
            });
          }, 420));
        };

        if (this.state.imgLoaded) {
          doReveal();
        } else {
          // wait for image to load, then reveal
          this._pendingReveal = () => {
            doReveal();
            this._pendingReveal = null;
          };
          // fallback: reveal anyway after 4s so we don't hang forever
          this._timers.push(setTimeout(() => {
            if (this._pendingReveal) {
              this._pendingReveal();
            }
          }, 4000));
        }
      };

      this._timers.push(setTimeout(revealThenContinue, pauseAfterHi));
    });
  }

  componentWillUnmount() {
    this._timers.forEach(t => clearTimeout(t));
    this._timers = [];
  }

  render() {
    const { typedText, typingComplete } = this.state;
    const aboutClass = `about${typingComplete ? ' typing-complete' : ''}`;
    
    // Split text at the last name for pronunciation guide placement
    const full = "Hi, I'm Rob McIlrath";
    const name = 'Rob McIlrath';
    const nameStart = full.indexOf(name);
    const beforeName = typedText.slice(0, nameStart);
    const namePart = typedText.slice(nameStart, nameStart + name.length);
    
    // Further split the name at the last name
    const lastName = 'McIlrath';
    const lastNameStart = name.indexOf(lastName);
    const firstName = name.slice(0, lastNameStart);
    const firstNamePart = namePart.slice(0, lastNameStart);
    const lastNamePart = namePart.slice(lastNameStart);

    return (
      <div className="home">
        <div className={aboutClass}>
          <img
            className={`headshot ${this.state.imgLoaded ? 'loaded' : 'loading'} ${this.state.headshotRevealed ? 'revealed' : ''}`}
            src={headshot}
            alt="Me"
            onLoad={() => this.setState({ imgLoaded: true }, () => {
              // If a reveal is pending, run it now
              if (this._pendingReveal) {
                this._pendingReveal();
                this._pendingReveal = null;
              }
            })}
            loading="lazy"
          />
          <h2 aria-label="Hi, I'm Rob McIlrath">
            <span className="typewriter typewriter-before" aria-hidden="true">{beforeName}</span>
            <span className="name-highlight">{firstNamePart}</span>
            <div className="last-name-with-pronunciation">
              <span className="typewriter typewriter-last name-highlight" aria-hidden="true">{lastNamePart}</span>
              {typingComplete && (
                <div className="pronunciation-guide">
                  (<span className="syllable">mack</span>
                  <span className="separator"></span>
                  <span className="syllable">el</span>
                  <span className="separator"></span>
                  <span className="syllable">rath</span>)
                </div>
              )}
            </div>
          </h2>
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