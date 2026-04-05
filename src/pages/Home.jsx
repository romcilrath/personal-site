import React, { Component } from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import headshot from '../images/Me.png';
import useInView from '../hooks/useInView';
import "../styles/Home.scss";

function RevealSection({ children, className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? 'in-view' : ''}`} {...rest}>
      {children}
    </div>
  );
}

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
    const firstNamePart = namePart.slice(0, lastNameStart);
    const lastNamePart = namePart.slice(lastNameStart);

    return (
      <div className="home" id="top">
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
            </div>
          </h2>
          <div className="prompt">
            <p>
              Software Engineer specializing in Python backend systems, distributed task processing, and internal platforms.
            </p>
            <p>
              I love solving problems, exploring new tech, and building systems that make life easier.
            </p>
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
        </div>

        <RevealSection className="skills" id="skills">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills__grid">
            {[
              { category: 'Languages', items: ['Python', 'C#', 'SQL', 'JavaScript', 'HTML/CSS'] },
              { category: 'Backend & Systems', items: ['Flask', 'Node.js', 'Express', 'Celery', 'Redis', 'REST APIs'] },
              { category: 'AI & Vector Search', items: ['LangChain', 'LLM APIs (OpenAI, Anthropic)', 'Qdrant', 'Elasticsearch'] },
              { category: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
              { category: 'Frontend', items: ['React', 'Angular'] },
              { category: 'Infrastructure & Tools', items: ['Docker', 'Kubernetes', 'GCP', 'Jenkins', 'Git', 'GitHub', 'Gerrit'] },
              { category: 'Testing & Automation', items: ['Pytest', 'Robot Framework'] },
            ].map((group) => (
              <div className="skills__category" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skills__chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    );
  }
}

export default Home;