import React from 'react';
import './HomePage.css';

function HomePage() {

    return (
        <div className="landing-page">
          {/* Your landing page content here */}
          <div className="category-buttons">
            <button className="category-buttons">All</button>
            <button className="category-buttons">Top</button>
            <button className="category-buttons">Trending</button>
            <button className="category-buttons">Energy</button>
            <button className="category-buttons">Natural Sciences</button>
            <button className="category-buttons">Pollution</button>
            <button className="category-buttons">Quantum</button>
            <button className="category-buttons">Current Season</button>
            <button className="category-buttons">Previous Season</button>
            <button className="category-buttons">Record Breakers</button>

          </div>

          <div className='video-thumbnails'>
            <button className="video-thumbnails">Video Thumbnail</button>
            <button className='video-thumbnails'>Video Thumbnail</button>
            <button className='video-thumbnails'>Video Thumbnail</button>
            <button className='video-thumbnails'>Video Thumbnail</button>
          </div>
        </div>
      );
}

export default HomePage;