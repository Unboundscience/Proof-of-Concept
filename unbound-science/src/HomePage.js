import React from 'react';


function HomePage() {

    return (
        <div className="landing-page">
          {/* Your landing page content here */}
          <div className="signup-buttons">
            <button className="scientist-button">All</button>
            <button className="donor-button">Top</button>
            <button className="community-button">Trending</button>
            <button className="community-button">Energy</button>
            <button className="community-button">Natural Sciences</button>
            <button className="community-button">Pollution</button>
            <button className="community-button">Quantum</button>
            <button className="community-button">Current Season</button>
            <button className="community-button">Previous Season</button>
            <button className="community-button">Record Breakers</button>

          </div>

          <div>
            <button>Video Thumbnail</button>
            <button>Video Thumbnail</button>
            <button>Video Thumbnail</button>
            <button>Video Thumbnail</button>
          </div>
        </div>
      );
}

export default HomePage;