import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // الروابط المحدثة
  const facebookLink = "https://www.facebook.com/skyacademy.ps.jd";
  const instagramLink = "https://www.instagram.com/skyacademy.ps_jd";
  
  // رقم الواتساب الجديد (بدون فواصل للرابط)
  const whatsappApiNumber = "970566252504"; 
  const whatsappApiLink = `https://wa.me/${whatsappApiNumber}`;

  return (
    <footer className="footer" dir="rtl">
      <div className="footer-container">
        {/* عن الأكاديمية */}
        <div className="footer-section">
          <h3>Sky Academy</h3>
          <p>رحلتك من الصفر إلى الاحتراف في عالم البرمجة.</p>
          <div className="social-links">
            <a href={facebookLink} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* تواصل معنا */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          
          <a href={whatsappApiLink} target="_blank" rel="noreferrer" className="contact-item whatsapp-link">
            <FaWhatsapp className="icon whatsapp-icon" /> 
            {/* dir="ltr" لضمان ظهور الزائد والأرقام بشكل صحيح من اليسار لليمين */}
            <span dir="ltr" className="phone-number">+970 566 252 504</span>
          </a>

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