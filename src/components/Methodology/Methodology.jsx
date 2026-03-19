import React from 'react';
import './Methodology.css';

const Methodology = () => {
  const methods = [
    {
      id: "01",
      title: "وضع الأساسيات",
      desc: "نركز على بناء وتأسيس المُتعلِّم بشكل صحيح وقوي في المفاهيم البرمجية الأساسية.",
    },
    {
      id: "02",
      title: "البناء التدريجي",
      desc: "الحرص على البناء فوق الأساس الجيد وبشكل تدريجي لضمان استيعاب أعمق للمادة.",
    },
    {
      id: "03",
      title: "الجانب التطبيقي",
      desc: "الاهتمام بالجانب العملي والتطبيقي جنباً إلى جنب مع الجانب النظري لترسيخ المعلومة.",
    }
  ];

  return (
    <section className="methodology" id="methodology">
      <div className="container">
        <h2 className="section-title">ما هو أسلوبنا؟</h2>
        <div className="cards-grid">
          {methods.map((method) => (
            <div className="card" key={method.id}>
              <div className="card-header">
                <span className="big-number">{method.id}</span>
              </div>
              <div className="card-body">
                <h3>{method.title}</h3>
                <div className="divider"></div>
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