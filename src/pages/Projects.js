import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar

function Projects() {
  return (
    <div>
      <Navbar /> {/* Add Navbar */}
      <div style={{ paddingTop: '100px' }}> {/* Added paddingTop */}
        Projects
      </div>
    </div>
  );
}

export default Projects;