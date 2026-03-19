import React from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <section className="hero-slider" id="home">
      {/* هنا بنستخدم صورة 1920x600 */}
      <div className="slide" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600/0056b3/ffffff?text=Slide+1:+Latest+Courses')" }}>
        <div className="slide-content">
          <h1>انطلق في رحلتك البرمجية</h1>
          <p>اكتشف أحدث الدورات والتدوينات التقنية</p>
          <button className="cta-button">تصفح الآن</button>
        </div>
      </div>
      {/* دوائر السلايدر الوهمية مؤقتاً */}
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default HeroSlider;