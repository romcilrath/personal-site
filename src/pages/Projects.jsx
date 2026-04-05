import React, { useState } from 'react';
import '../styles/Projects.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'AI-Driven Ticket Search & Creation Tool',
    tech: ['Python', 'Node.js', 'React', 'Qdrant', 'Redis', 'Celery', 'MySQL'],
    bullets: [
      'Created a full-stack RAG system enabling semantic search and automated Jira ticket creation across thousands of internal records.',
      'Designed distributed Celery/Redis ingestion pipeline for high-frequency data synchronization and embedding generation, maintaining API-rate-limited updates at 15-minute intervals.',
    ],
  },
  {
    title: 'Device Provisioning Portal',
    tech: ['Python', 'Flask', 'React', 'Ping SSO', 'Jenkins'],
    bullets: [
      'Built a secure company Ping SSO-integrated internal web application to automate the whitelisting and flashing of restricted Android firmware.',
      'Designed and deployed a Flask/React portal for managing sensitive device serial number whitelisting, replacing manual IT tickets with an automated workflow that reduced turnaround time from days to under 30 minutes.',
    ],
  },
];

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-card ${open ? 'project-card--open' : ''}`} onClick={() => setOpen((prev) => !prev)}>
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <ExpandMoreIcon className={`project-card__icon ${open ? 'project-card__icon--rotated' : ''}`} />
      </div>
      <div className="project-card__chips">
        {project.tech.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
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