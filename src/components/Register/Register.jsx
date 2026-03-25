import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    residence: '', // تم التبديل هنا
    phonePrefix: '+970',
    otherPrefix: '',
    phone: '',
    academicStatus: 'طالب',
    educationDegree: 'ثانوية عامة',
    major: '',
    hasComputer: 'نعم',
    hasBackground: 'لا',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycby-9FC0QLpISZ0aspy0-kFYzZXFxutfjB5EhdgxwGaQ2CcEjJzTSgEWhqw6sSW2f7-a_g/exec';

    try {
      const finalPhone = (formData.phonePrefix === 'other' ? formData.otherPrefix : formData.phonePrefix) + formData.phone;
      const dataToSubmit = { ...formData, fullPhone: finalPhone };
      
      const form = new FormData();
      Object.keys(dataToSubmit).forEach(key => form.append(key, dataToSubmit[key]));
      
      // mode: 'no-cors' ضروري للتعامل مع Google Apps Script
      await fetch(scriptURL, { method: 'POST', body: form, mode: 'no-cors' });
      setIsSuccess(true);
    } catch (error) {
      console.error('Error!', error.message);
      alert('حدث خطأ، يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>تم إرسال طلبك بنجاح!</h2>
          <p>شكراً لانضمامك لـ <strong>Sky Academy</strong>. فريقنا سيتواصل معك عبر الواتساب خلال 24 ساعة.</p>
          <button onClick={() => window.location.href='/'} className="back-home-btn">العودة للرئيسية</button>
        </div>
      </div>
    );
  }

  return (
    <section className="register-section">
      <div className="container">
        <div className="register-card">
          <div className="register-header">
            <span className="course-badge">تكلفة الدورة: 200$</span>
            <h2>تقديم طلب للتسجيل في الدورة</h2>
            <p>سيتم التواصل معك بعد تقديمك للطلب</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            
            {/* القسم الأول: البيانات الشخصية */}
            <div className="form-section">
              <h3 className="section-title">1. البيانات الشخصية</h3>
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="أدخل اسمك الثلاثي" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>العمر</label>
                  <input type="number" name="age" required value={formData.age} onChange={handleChange} placeholder="25" />
                </div>
                <div className="form-group">
                  <label>مكان السكن</label>
                  <input type="text" name="residence" required value={formData.residence} onChange={handleChange} placeholder="مثال: رام الله، حي الطيرة" />
                </div>
              </div>

              <div className="form-group">
                <label>رقم الواتساب</label>
                <div className="phone-input-wrapper">
                  <select name="phonePrefix" value={formData.phonePrefix} onChange={handleChange} className="prefix-select">
                    <option value="+970">🇵🇸 +970</option>
                    <option value="+972">🇵🇸 +972</option>
                    <option value="+962">🇯🇴 +962</option>
                    <option value="other">آخر</option>
                  </select>
                  {formData.phonePrefix === 'other' && (
                    <input type="text" name="otherPrefix" className="other-prefix" placeholder="+1" onChange={handleChange} required />
                  )}
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="59XXXXXXX" className="phone-main" />
                </div>
              </div>
            </div>

            {/* القسم الثاني: الخلفية التقنية والتعليم */}
            <div className="form-section">
              <h3 className="section-title">2. الخلفية التعليمية والتقنية</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>الحالة الدراسية</label>
                  <select name="academicStatus" value={formData.academicStatus} onChange={handleChange}>
                    <option value="طالب">طالب</option>
                    <option value="متخرج">متخرج</option>
                    <option value="متوقف">متوقف</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>درجة التعليم</label>
                  <select name="educationDegree" value={formData.educationDegree} onChange={handleChange}>
                    <option value="ثانوية عامة">ثانوية عامة</option>
                    <option value="باكالوريوس">باكالوريوس</option>
                    <option value="ماجيستير">ماجيستير</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>التخصص (اختياري)</label>
                <input type="text" name="major" value={formData.major} onChange={handleChange} placeholder="مثال: علم حاسوب" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>هل لديك حاسوب؟</label>
                  <div className="radio-group">
                    <label><input type="radio" name="hasComputer" value="نعم" checked={formData.hasComputer === 'نعم'} onChange={handleChange} /> نعم</label>
                    <label><input type="radio" name="hasComputer" value="لا" checked={formData.hasComputer === 'لا'} onChange={handleChange} /> لا</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>هل لديك خلفية تقنية؟</label>
                  <div className="radio-group">
                    <label><input type="radio" name="hasBackground" value="نعم" checked={formData.hasBackground === 'نعم'} onChange={handleChange} /> نعم</label>
                    <label><input type="radio" name="hasBackground" value="لا" checked={formData.hasBackground === 'لا'} onChange={handleChange} /> لا</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>لماذا تريد التسجيل في الدورة؟</label>
              <textarea name="reason" rows="4" value={formData.reason} onChange={handleChange} placeholder="أخبرنا عن هدفك من الدورة..."></textarea>
            </div>

            <div className="info-box">
              <p>متردد في التسجيل؟ <a href="/FAQ" target="_blank" rel="noreferrer">اقرأ هذه الصفحة</a></p>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'جاري معالجة طلبك...' : 'قدم طلب التسجيل'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;