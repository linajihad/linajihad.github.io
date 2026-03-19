import React from 'react';
import './Methodology.css';

const Methodology = () => {
  const methods = [
    {
      id: 1,
      title: "وضع الأساسيات",
      desc: "نركز على بناء وتأسيس المُتعلِّم بشكل صحيح وقوي في المفاهيم البرمجية.",
      img: "https://via.placeholder.com/400x250/e9ecef/0056b3?text=Basics"
    },
    {
      id: 2,
      title: "البناء التدريجي",
      desc: "الحرص على البناء فوق الأساس الجيد وبشكل تدريجي لضمان استيعاب أعمق.",
      img: "https://via.placeholder.com/400x250/e9ecef/0056b3?text=Step+by+Step"
    },
    {
      id: 3,
      title: "الجانب التطبيقي",
      desc: "الاهتمام بالجانب العملي والتطبيقي جنباً إلى جنب مع الجانب النظري.",
      img: "https://via.placeholder.com/400x250/e9ecef/0056b3?text=Practical"
    }
  ];

  return (
    <section className="methodology" id="courses">
      <div className="container">
        <h2 className="section-title">ما هو أسلوبنا؟</h2>
        <div className="cards-grid">
          {methods.map((method) => (
            <div className="card" key={method.id}>
              <img src={method.img} alt={method.title} className="card-img" />
              <div className="card-body">
                <div className="step-number">{method.id}</div>
                <h3>{method.title}</h3>
                <p>{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;