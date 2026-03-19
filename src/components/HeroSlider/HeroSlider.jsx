import React from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد الهوك الخاص بالتنقل
import './HeroSlider.css';
import heroImg from '../../assets/hero-bg.png'; 

const HeroSlider = () => {
  const navigate = useNavigate(); // تعريف تابع التنقل

  return (
    <section className="hero-slider">
      <div 
        className="slide" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="slide-content">
          <h1>أكاديمية سكاي للبرمجة</h1>
          <p>سجّل في الدورة وادخل مجال البرمجة وعلم الحاسوب</p>
          <div className="hero-buttons">
            {/* إضافة حدث النقر ليقوم بالانتقال لرابط التسجيل */}
            <button 
              className="cta-button" 
              onClick={() => navigate('/register')}
            >
              سجّل الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;