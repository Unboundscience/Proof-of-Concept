import React from 'react';
import './DonorPage.css'


function DonorPage() {

    return (
        <div className='donor-page'>
          <div className='make-donation-button'>
          <button className="make-donation-button">Make Donation</button>
          </div>
          <div className="category-buttons">
            <button className="category-buttons">Donation History</button>
            <button className="category-buttons">Community Proposals</button>
            <button className="category-buttons">Referrals</button>
            <button className="category-buttons">Scientific Peer Review</button>
            <button className="category-buttons">Voting History</button>
            <button className="category-buttons">Foundation Proposals</button>
            <button className="category-buttons">Favorites</button>
            <button className="category-buttons">Live Chat</button>

          </div>
        </div>
      );
}

export default DonorPage;