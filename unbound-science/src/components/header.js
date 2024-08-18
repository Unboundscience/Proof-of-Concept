import React from 'react';
import './Header.css'; 
import logo from '../images/USLogo-white.png';

function Header({ onNavigate }) {
  return (
    <header className="header">
      <img src={logo} alt="US Logo" className="logo-image" /> 
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <button className="signup-button" onClick={() => onNavigate('signup')}>Sign Up</button>
    </header>
  );
}

export default Header;
