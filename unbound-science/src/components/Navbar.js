import React from 'react';
import './Navbar.css'; // Create a separate CSS file for Navbar styling

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => onNavigate('home')}>Home</li> 
        <li onClick={() => onNavigate('scientist')}>Scientist Page</li>
        <li onClick={() => onNavigate('donor')}>Donor Page</li>
        <li onClick={() => onNavigate('community')}>Community Page</li>
      </ul>
    </nav>
  );
}

export default Navbar;