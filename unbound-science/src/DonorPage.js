import React from 'react';
import './DonorPage.css'


function DonorPage() {

    return (
        <div className='donor-page'>
          <div className='make-donation-button'>
          <button className="make-donation-button">Make Donation</button>
          </div>
          <div className="donor-category-buttons">
            <button className="donor-category-buttons">Donation History</button>
            <button className="donor-category-buttons">Community Proposals</button>
            <button className="donor-category-buttons">Referrals</button>
            <button className="donor-category-buttons">Scientific Peer Review</button>
            <button className="donor-category-buttons">Voting History</button>
            <button className="donor-category-buttons">Foundation Proposals</button>
            <button className="donor-category-buttons">Favorites</button>
            <button className="donor-category-buttons">Live Chat</button>

          </div>
        </div>
      );
}

export default DonorPage;