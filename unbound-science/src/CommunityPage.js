import React from 'react';
import './CommunityPage.css'

function CommunityPage() {

    return (
        <div className="community-page">
          {/* Your landing page content here */}
          <div className="community-page-buttons">
            <button className="community-page-buttons">Viewing History</button>
            <button className="community-page-buttons">Community Proposals</button>
            <button className="community-page-buttons">Referrals</button>
            <button className="community-page-buttons">Scientific Peer Review</button>
            <button className="community-page-buttons">Voting History</button>
            <button className="community-page-buttons">Foundation Proposals</button>
            <button className="community-page-buttons">Favorites</button>
            <button className="community-page-buttons">Live Chat</button>

          </div>
        </div>
      );
}

export default CommunityPage;