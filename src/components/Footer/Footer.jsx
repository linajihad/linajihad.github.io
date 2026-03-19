import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Sky Academy</h3>
          <p>رحلتك من الصفر إلى الاحتراف في عالم البرمجة.</p>
        </div>
        <div className="footer-contact">
          <h4>تواصل معنا</h4>
          <p>رقم الهاتف: +970 000 0000</p>
          <p>البريد الإلكتروني: info@skyacademy.ps</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © 2026 Sky Academy</p>
      </div>
    </footer>
  );
};

export default Footer;