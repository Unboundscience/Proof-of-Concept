import React from 'react';
import './Navbar.css'; // Create a separate CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
        <li><a href="#link3">Link 3</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;