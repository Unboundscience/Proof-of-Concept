import React from 'react';
import './Header.css'; 


function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <button className="scientist-button" onClick={() => onNavigate('signup')}>Sign Up</button>
    </header>
  );
}

export default Header;
