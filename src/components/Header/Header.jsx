import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import logoImg from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logoImg} alt="Sky Academy Logo" className="logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/course-details">تفاصيل الدورة</Link></li>
            <li><Link to="/FAQ">الأسئلة الشائعة</Link></li> 
            <li><Link to="/register" className="nav-register-btn">سجل الآن</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;