import React from 'react';


function DonorPage() {

    return (
        <div className="landing-page">
          {/* Your landing page content here */}
          <div>
          <button className="scientist-button">Make Donation</button>
          </div>
          <div className="signup-buttons">
            <button className="scientist-button">Donation History</button>
            <button className="donor-button">Community Proposals</button>
            <button className="community-button">Referrals</button>
            <button className="community-button">Scientific Peer Review</button>
            <button className="community-button">Voting History</button>
            <button className="community-button">Foundation Proposals</button>
            <button className="community-button">Favorites</button>
            <button className="community-button">Live Chat</button>

          </div>
        </div>
      );
}

export default DonorPage;