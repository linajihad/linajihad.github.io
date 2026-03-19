import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    country: 'فلسطين', 
    phone: '', 
    status: 'طالب', 
    major: '', 
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
      const form = new FormData();
      Object.keys(formData).forEach(key => form.append(key, formData[key]));
      
      // ملاحظة للـ Backend: الـ mode: 'no-cors' أحياناً بنحتاجه مع Google Scripts
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
          <p>شكراً لاهتمامك بـ <strong>Sky Academy</strong>. فريقنا سيقوم بمراجعة طلبك والتواصل معك عبر الواتساب قريباً جداً.</p>
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
            <h2>انضم إلى رحلة الاحتراف</h2>
            <p>سجل بياناتك الآن لتبدأ أولى خطواتك في عالم البرمجة</p>
          </div>
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label>الاسم الكامل</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="أدخل اسمك الثلاثي" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>الدولة</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="فلسطين">فلسطين</option>
                  <option value="الأردن">الأردن</option>
                </select>
              </div>
              <div className="form-group">
                <label>رقم التواصل (WhatsApp)</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="05XXXXXXXX" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>الحالة الدراسية</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option value="طالب">طالب</option>
                  <option value="متخرج">متخرج</option>
                  <option value="متوقف">متوقف</option>
                </select>
              </div>
              <div className="form-group">
                <label>التخصص</label>
                <input type="text" name="major" required value={formData.major} onChange={handleChange} placeholder="مثال: هندسة برمجيات" />
              </div>
            </div>

            <div className="form-group">
              <label>لماذا تريد التسجيل في الدورة؟</label>
              <textarea name="reason" rows="4" value={formData.reason} onChange={handleChange} placeholder="أخبرنا عن شغفك..."></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'جاري الإرسال...' : 'تأكيد التسجيل'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;