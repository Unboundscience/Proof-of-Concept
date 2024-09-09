import React from 'react';
import './ScientistPage.css'


function ScientistPage( { onNavigate }) {

  const handleMyProjectsClick = () => {
    onNavigate('my-projects');
};

    return (
        <div className='scientist-page'>
          <div className='scientist-header'>
            Scientist Studio
          </div>
          
          <div className="signup-buttons">
          <button className="scientist-page-button" onClick={handleMyProjectsClick}>
                    My Projects
                </button>
            <button className="scientist-page-button">My Sectors</button>
            <button className="scientist-page-button">My Reviews</button>
          </div>
        </div>
      );
}

export default ScientistPage;
