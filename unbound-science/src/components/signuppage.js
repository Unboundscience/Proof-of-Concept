import React from 'react';
import './signuppage.css';


function SignUpPage({ onNavigate }) { // Receive onNavigate prop
  return (
    <div className="landing-page">
      <h1>One Account, Different Views </h1>
      <br></br>
      <div className="signup-buttons">
        <button className="scientist-button" onClick={() => onNavigate('scientist')}>Scientist</button>
        <button className="donor-button" onClick={() => onNavigate('donor')}>Donor</button>
        <button className="community-button" onClick={() => onNavigate('community')}>Community</button>
      </div>
    </div>
  );
}


export default SignUpPage;
