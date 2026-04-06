import React from 'react';
import '../styles/Experience.scss';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import useInView from '../hooks/useInView';

function Experience() {
  const [ref, inView] = useInView();

  return (
    <div className={`experience ${inView ? 'in-view' : ''}`} id="experience" ref={ref}>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline__item">
          <div className="timeline__icon timeline__icon--work">
            <WorkIcon />
          </div>
          <div className="timeline__content">
            <span className="timeline__date">Feb 2022 – Present</span>
            <h3 className="timeline__title">Software Engineer II</h3>
            <h4 className="timeline__subtitle timeline__subtitle--company">Zebra Technologies</h4>
            <ul className="timeline__bullets">
              <li>Architected <span className="text-highlight">LLM-powered internal tooling</span> using <span className="text-highlight">LangChain and RAG</span> to enable <span className="text-highlight">natural language search</span> of ticket database and <span className="text-highlight">automated ticket creation</span> from large-scale datasets of automated test results.</li>
              <li>Built <span className="text-highlight">distributed ingestion pipelines</span> to populate a custom vector database of tickets, processing <span className="text-highlight">10k+ records per day</span> and leveraged to prevent duplicate issue creation.</li>
              <li>Developed internal tools using <span className="text-highlight">Flask APIs and React interfaces</span>, integrating <span className="text-highlight">Ping SSO</span> to securely enable authorized team members to automate device provisioning and firmware whitelisting workflows.</li>
              <li>Automated and revitalized <span className="text-highlight">Stability Testing and MTBF reporting pipelines</span>, generating enhanced weekly reliability metrics for engineering teams.</li>
              <li>Maintained and evolved a <span className="text-highlight">critical Python/Robot Framework library</span> used across <span className="text-highlight">CI/CD pipelines</span>.</li>
            </ul>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__icon timeline__icon--education">
            <SchoolIcon />
          </div>
          <div className="timeline__content">
            <span className="timeline__date">Sep 2016 – Dec 2020</span>
            <h3 className="timeline__title">B.S. in Computer Science</h3>
            <h4 className="timeline__subtitle">Minor in Mathematics</h4>
            <p className="timeline__school">State University of New York at Albany</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;