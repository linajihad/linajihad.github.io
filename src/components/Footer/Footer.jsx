import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sky Academy</h3>
          <p>رحلتك من الصفر إلى الاحتراف في عالم البرمجة.</p>
        </div>
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <div>رقم الهاتف:  416 458 568 970</div>
          <div>البريد الإلكتروني: info@skyacademy.tech</div>
        </div>
      </div>
      <div className="footer-bottom">
        جميع الحقوق محفوظة © Sky Academy 2026
      </div>
    </footer>
  );
};
export default Footer;