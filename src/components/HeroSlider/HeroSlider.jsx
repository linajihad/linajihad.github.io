import React from 'react';
import './HeroSlider.css';
import heroImg from '../../assets/hero-bg.png'; 

const HeroSlider = () => {
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
            <button className="cta-button">سجّل الآن</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;