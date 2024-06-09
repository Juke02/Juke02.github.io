import React from 'react';
import './Header.css'; // Importing the CSS file for the Header component
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Dane Nail</h1>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
