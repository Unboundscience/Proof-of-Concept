import ProjectActions from '../components/ProjectActions';
import './MyProjectsPage.css';

function MyProjectsPage () {
    return (
        <div className='scientist-page'>
          <div className='scientist-header'>
            Scientist Studio
          </div>
          
          <div className='container'>
            <div className="project-section">
            <button className="scientist-page-button" >Upload Intro Video</button>
              <button className="scientist-page-button">Upload Full Explainer Video</button>
              <button className="scientist-page-button">Upload Experiment Notes</button>
              <button className="scientist-page-button">Upload Additional Videos</button>
              <button className="scientist-page-button">Upload 3D Printer Files</button>
              <button className="scientist-page-button">Upload Blueprints (CAD)</button>
            </div>
            <ProjectActions />
          </div>
        </div>
      );
}


export default MyProjectsPage;