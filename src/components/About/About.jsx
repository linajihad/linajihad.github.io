import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaGraduationCap, FaCode, FaAward, FaGlobeEurope } from 'react-icons/fa';
import './About.css';
import saeedPhoto from '../../assets/saeedjk.jpeg';
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* الهوية البصرية */}
        <div className="instructor-hero">
          <div className="photo-frame">
            <img src={saeedPhoto} alt="سعيد جهاد" className="instructor-photo" />
          </div>
          <h2 className="instructor-name">سعيد جهاد</h2>
          <p className="instructor-title"> Backend Engineer & Software Architect</p>
        </div>

        {/* رؤيتك الخاصة فقط */}
        <div className="instructor-bio">
          <p>
            علم الحاسوب ليست مجرد كتابة كود ولا تقتصر عما نتعلمه سواء في الجامعة أو ما نكتسبه سواء في العمل أو أي مكان آخر. 
            وإنما هي عالم واسع من المجالات حيث لا يقل مجال أهميةً عن الآخر. 
            بإمكانك أن تجد نفسك مبدعًا في واحد من المجالات التي ربما لم تسمع عنها لا خلال دراستك الجامعية ولا خلال سنوات العمل.
          </p>

          <p>
            لا أرى أن الآوان قد فات لأي أحد لتعلم البرمجة ودخول عالم الحاسوب مهما كانت درجته الدراسية أو خلفيته العلمية.
          </p>
        </div>

        {/* المعلومات التقنية في كروت مختصرة */}
        <div className="highlights-grid">
          <div className="highlight-card">
            <FaCode className="h-icon" />
            <h4>الخبرة العملية</h4>
            <p>+4 سنوات في تطوير الـ Backend</p>
          </div>
          <div className="highlight-card">
            <FaGraduationCap className="h-icon" />
            <h4>الدرجة العلمية</h4>
            <p>بكالوريوس علم حاسوب من جامعة بيرزيت</p>
          </div>
          <div className="highlight-card">
            <FaAward className="h-icon" />
            <h4>ريادة</h4>
            <p>رئيس نادي CS بيرزيت 2021</p>
          </div>
          <div className="highlight-card">
            <FaGlobeEurope className="h-icon" />
            <h4>ورشات عمل</h4>
            <p>إسبانيا - جامعة ألكالا 2022</p>
          </div>
        </div>

        {/* حسابات التواصل الشخصية */}
        <div className="instructor-socials">
          <h3>تواصل معي</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com/saeed.kalloub/" target="_blank" rel="noreferrer" className="s-btn fb">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/s3eedjehad/" target="_blank" rel="noreferrer" className="s-btn ig">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/970568458416" target="_blank" rel="noreferrer" className="s-btn wa">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;