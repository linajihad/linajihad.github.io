import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* عن الأكاديمية */}
        <div className="footer-section">
          <h3>Sky Academy</h3>
          <p>رحلتك من الصفر إلى الاحتراف في عالم البرمجة.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/skyacademyps/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/skyacademy.ps/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* تواصل معنا */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <div className="contact-item">
             <FaWhatsapp className="icon" /> <span>970 568 458 416</span>
          </div>
          <div className="contact-item">
             <FaEnvelope className="icon" /> <span>info@skyacademy.tech</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © Sky Academy 2026</p>
      </div>
    </footer>
  );
};

export default Footer;