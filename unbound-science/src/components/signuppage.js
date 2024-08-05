import React, { useState } from 'react';
import './signuppage.css';

function SignUpPage() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
    // Here, you'd normally navigate to the corresponding sign-up page
    // For now, let's just log a message
    console.log(`Navigating to ${buttonName} sign-up page...`); 
  };

  return (
    <div className="container">
 
      <main>
        <div className="button-container">
        <button className="signup-button">Scientist</button>
        <button className="signup-button">Donor</button>
        <button className="signup-button">Community</button>
        </div>
      </main>

    </div>
  );
}

export default SignUpPage;
