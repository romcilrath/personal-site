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
            <h4 className="timeline__subtitle">Zebra Technologies</h4>
            <ul className="timeline__bullets">
              <li>Architected LLM-powered internal tooling using LangChain and RAG to enable natural language search of ticket database and automated ticket creation from large-scale datasets of automated test results.</li>
              <li>Built distributed ingestion pipelines to populate a custom vector database of tickets, processing 10k+ records per day and leveraged to prevent duplicate issue creation.</li>
              <li>Developed internal tools using Flask APIs and React interfaces, integrating Ping SSO to securely enable authorized team members to automate device provisioning and firmware whitelisting workflows.</li>
              <li>Automated and revitalized Stability Testing and MTBF reporting pipelines, generating enhanced weekly reliability metrics for engineering teams.</li>
              <li>Maintained and evolved a critical Python/Robot Framework library used across CI/CD pipelines.</li>
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