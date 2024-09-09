import React from 'react';
import './ScientistPage.css';
import './ScientistMyProjects.css';


function ScientistMyProjectsPage() {

    return (
        <div className='scientist-page'>
          <div className='scientist-header'>
            My Projects
          </div>
          
          <div className="signup-buttons">
            <button className="scientist-page-button">Create New Project</button>
          </div>
          <br />
          <div className='project-section'> 
          <button className="project-thumbnail">My First Project</button>
            <button className='project-thumbnail'>My Second Project</button>
            <button className='project-thumbnail'>My Third ScientistMyProjectsPage</button>
          </div>
        </div>
      );
}

export default ScientistMyProjectsPage;
