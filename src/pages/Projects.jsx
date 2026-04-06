import React, { useState } from 'react';
import '../styles/Projects.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'AI-Driven Ticket Search & Creation Tool',
    tech: ['Python', 'Node.js', 'React', 'Qdrant', 'Redis', 'Celery', 'MySQL'],
    bullets: [
      <>Created a <span className="text-highlight">full-stack RAG system</span> enabling <span className="text-highlight">semantic search</span> and <span className="text-highlight">automated Jira ticket creation</span> across thousands of internal records.</>,
      <>Designed <span className="text-highlight">distributed Celery/Redis ingestion pipeline</span> for high-frequency data synchronization and embedding generation, maintaining API-rate-limited updates at <span className="text-highlight">15-minute intervals</span>.</>,
    ],
  },
  {
    title: 'Device Provisioning Portal',
    tech: ['Python', 'Flask', 'React', 'Ping SSO', 'Jenkins'],
    bullets: [
      <>Built a secure company <span className="text-highlight">Ping SSO-integrated</span> internal web application to automate the whitelisting and flashing of restricted Android firmware.</>,
      <>Designed and deployed a <span className="text-highlight">Flask/React portal</span> for managing sensitive device serial number whitelisting, replacing manual IT tickets with an automated workflow that reduced turnaround time from <span className="text-highlight">days to under 30 minutes</span>.</>,
    ],
  },
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`project-card ${open ? 'project-card--open' : ''}`} onClick={() => setOpen((prev) => !prev)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((prev) => !prev); } }}>
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <ExpandMoreIcon className={`project-card__icon ${open ? 'project-card__icon--rotated' : ''}`} />
      </div>
      <div className="project-card__chips">
        {project.tech.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
      {!open && <p className="project-card__hint">Click to expand</p>}
      <div className={`project-card__details ${open ? 'project-card__details--open' : ''}`}>
        <ul>
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  const [ref, inView] = useInView();

  return (
    <div className={`projects ${inView ? 'in-view' : ''}`} id="projects" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;