import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          {/* حط مسار اللوغو تبعك هون */}
          <img src="https://via.placeholder.com/150x60/004085/FFFFFF?text=Sky+Academy+Logo" alt="Sky Academy Logo" className="logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home" className="active">الرئيسية</a></li>
            <li><a href="#courses">الدورات</a></li>
            <li><a href="#posts">المنشورات</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;