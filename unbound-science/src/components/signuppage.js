import React, { useState} from 'react';
import './signuppage.css';
import ScientistSignupForm from './ScientistSignupForm';


function SignUpPage({ onNavigate }) { // Receive onNavigate prop
  const [showScientistForm, setShowScientistForm] = useState(false);

  const handleScientistClick = () => {
    setShowScientistForm(true); // Show the form when the button is clicked
  };

  return (
    <div className="landing-page">
      <h1>One Account, Different Views </h1>
      <br></br>
      <div className="signup-buttons">
      <button className="scientist-button" onClick={handleScientistClick}>Scientist</button>
        <button className="donor-button" onClick={() => onNavigate('donor')}>Donor</button>
        <button className="community-button" onClick={() => onNavigate('community')}>Community</button>
      </div>
      {showScientistForm && <ScientistSignupForm onNavigate={onNavigate} />}
    </div>
  );
}


export default SignUpPage;
