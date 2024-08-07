import React from 'react';
import './signuppage.css';

function SignUpPage() {


  return (
    <div className="landing-page">
      {/* Your landing page content here (e.g., text, images) */}
      <div className="signup-buttons">
          <button className="scientist-button">Scientist</button>
          <button className="donor-button">Donor</button>
          <button className="community-button">Community</button>
      </div>
    </div>
  );
}

export default SignUpPage;
