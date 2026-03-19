import React from 'react';
import './Header.css';
import logoImg from '../../assets/logo.png'; // استيراد اللوغو من مجلد assets

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <a href="/">
            <img src={logoImg} alt="Sky Academy Logo" className="logo" />
          </a>
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