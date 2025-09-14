import React from 'react';
import '../styles/Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ProjectIcon from '@mui/icons-material/Build';


function Experience() {
  return (
    <div>
      <div className="experience" style={{ paddingTop: '100px' }}> {/* Added paddingTop */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2011 - 2015"
            iconStyle={{ background: '#2196f3', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Example</h4>
            <p>Studied computer science, focusing on software development, algorithms, and data structures.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#e91e63', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tech Corp</h4>
            <p>Worked as a full-stack developer, building web applications and optimizing user experiences.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--project"
            date="2016 - 2020"
            iconStyle={{ background: '#9C27B0', color: '#fff' }}
            icon={<ProjectIcon />}
          >
            <h3 className="vertical-timeline-element-title">Projectium</h3>
            <h4 className="vertical-timeline-element-subtitle">Gettin' Stuff Done</h4>
            <p>Made a really cool project, hire me.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;