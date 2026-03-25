import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "ليش لازم أسجل في الدورة؟",
      answer: "إذا حابب يصير مجالك هو مجال علم الحاسوب والبرمجة، الطريق من هاي الدورة هو الأنسب والأبسط إلك. بنختصر عليك تشتت المصادر وبنعطيك الصافي اللي بطلبه سوق العمل."
    },
    {
      question: "مش كثير 200 دولار على الدورة؟",
      answer: "ببساطة دورتنا مش مجرد حدا بشرح عالزوم وأنت بتحضر. العدد محدود جداً في السيشنز ورح يكون في تتبيع مع كل شخص بشخصه حتى نتأكد إنك رح تطلع مستفيد بكل الي رح نعطيك إياه. السعر قليل مقارنة بالقيمة العلمية والمتابعة الشخصية، وعلمًا أن السعر رح يزداد في الدورات القادمة."
    },
    {
      question: "هل رح أصير محترف بعد الدورة؟",
      answer: "رح تصير عالأقل مبرمج جيد جدًا، وعندك خلفية واطلاع واسع على مجالات علم الحاسوب، ومعك الأدوات اللي بتخليك قادر تتعمق في أي مجال أو تتخصص فيه وتشد حيلك بقوة."
    },
    {
      question: "هل رح أكون قادر أشتغل بعد الدورة؟",
      answer: "إحنا رح ننصح ونساعد بإنه تلتحق وتتدرب بشركة من شركات التكنولوجيا عشان تكسب ثقة وتوظف المعرفة اللي تعلمتها وتحولها لخبرة عملية. إذا فعلًا شديت حالك معنا وكنت مهتم، فأنت مؤهل طبعًا."
    },
    {
      question: "ما بعرف إشي بالبرمجة وتخصصي إشي تاني، بقدر أسجل؟",
      answer: "طالما معك لابتوب، وطالما مهتم، فزيّك زي أي شخص ثاني وبتقدر تسجل وتستفيد. منهجنا مبني ليبدأ معك من الصفر تماماً، أهم إشي تكون معني بالتطبيق العملي مش بس الاستماع."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>الأسئلة الشائعة</h2>
          <p>كل ما تحتاج معرفته عن رحلتك في Sky Academy</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>إذا عندك سؤال ثاني، ما تتردد تبعت لنا على الإيميل:</p>
          <a href="mailto:info@skyacademy.tech" className="faq-email">info@skyacademy.tech</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;