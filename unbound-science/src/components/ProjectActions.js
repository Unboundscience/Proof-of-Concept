import React from 'react';
import './ProjectActions.css'; // Create a CSS file for styling

function ProjectActions() {
  return (
    <div className="project-actions">
      <button>Publish</button>
      <button>Unpublish</button>
      <button>Delete</button>
      <button>Deadman Switch</button>
      <button>Peer Reviews</button>
    </div>
  );
}

export default ProjectActions;