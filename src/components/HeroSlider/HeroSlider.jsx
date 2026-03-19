import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const navigate = useNavigate();

  const skills = [
    { id: 1, name: "جافا" },
    { id: 2, name: "سي بلس بلس" },
    { id: 3, name: "اوبجكت اورينتد" },
    { id: 4, name: "ويب ديفيلوبمنت" },
    { id: 5, name: "باك ايند" },
    { id: 6, name: "فرونت ايند" },
    { id: 7, name: "ريآكت" },
    { id: 8, name: "سبرينغ بوت" },
    { id: 9, name: "كمبيوتر ساينس" },
    { id: 10, name: "كارير" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text-content">
          <h1>
            بتتعلم في دورتنا البرمجة وبتدخل بمجال علم الحاسوب <span className="highlight">من دون الحاجة لأي خلفية تقنية!!</span>
          </h1>
          
          <div className="skill-pills-grid">
            {skills.map(skill => (
              <span key={skill.id} className="skill-pill">
                {skill.name}
              </span>
            ))}
          </div>

          <p className="hero-paragraph">
            بعد دورتنا رح تكون قادر إنك تبرمج بلغات برمجة مختلفة زي الجافا والسي بلس بلس، تكون قادر إنك تبني ويب أبليكيشن (باك إيند وفرونت إيند)، وتكون بتعرف عن مجالات علم الحاسوب وبس تخلص بتكون جاهز لأنه تنطلق بمسيرتك المهنية
          </p>
          
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate('/register')}>
              سجّل الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;