import React from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const syllabus = [
    {
      week: "الأسبوع الأول: Week 1",
      title: "The Foundations (الأساسيات والمنطق)",
      days: [
        { d: 1, en: "The Tech Frontier: Careers, Hardware & Software", ar: "الحدود التقنية: المسارات المهنية، الهاردوير والسوفتوير" },
        { d: 2, en: "The Language of Machines: Binary & Logic", ar: "لغة الآلة: أنظمة العد وأسس المنطق البرمجي" },
        { d: 3, en: "Basic Algorithms & Logical Flowcharts", ar: "الخوارزميات الأساسية والمخططات الانسيابية" },
        { d: 4, en: "Advanced Flowcharts I: Decision Making", ar: "المخططات الانسيابية المتقدمة (1): اتخاذ القرار" },
        { d: 5, en: "Advanced Flowcharts II: Process Mapping", ar: "المخططات الانسيابية المتقدمة (2): رسم العمليات" },
      ]
    },
    {
      week: "الأسبوع الثاني: Week 2",
      title: "The Core of Coding (لغة C++ - التدريب المكثف)",
      days: [
        { d: 6, en: "C++ Basics: Syntax, Data Types & Variables", ar: "أساسيات C++: القواعد، أنواع البيانات والمتغيرات" },
        { d: 7, en: "Control Flow: If-Statements, Switch & Loops", ar: "التحكم في التدفق: الشروط، الاختيار وحلقات التكرار" },
        { d: 8, en: "Functions & Code Modularity", ar: "الدوال وتنظيم الكود الوظيفي" },
        { d: 9, en: "Data Structures I: Arrays & String Handling", ar: "هياكل البيانات (1): المصفوفات والتعامل مع النصوص" },
        { d: 10, en: "The Problem-Solving Lab: Logic Consolidation", ar: "مختبر حل المشكلات: ترسيخ المنطق البرمجي" },
      ]
    },
    {
      week: "الأسبوع الثالث: Week 3",
      title: "The Java Shift (الانتقال إلى الجافا والاحتراف)",
      days: [
        { d: 11, en: "Java Ecosystem: JVM & Syntax Essentials", ar: "بيئة الجافا: الـ JVM وأساسيات القواعد البرمجية" },
        { d: 12, en: "Java Logic: Methods, Scopes & Flow", ar: "منطق الجافا: الدوال، النطاقات وتدفق البيانات" },
        { d: 13, en: "Dynamic Collections: ArrayLists & Strings", ar: "المجموعات الديناميكية: القوائم المرنة والنصوص" },
        { d: 14, en: "Professional Practices: Exception Handling", ar: "الممارسات الاحترافية: معالجة الاستثناءات (Errors)" },
        { d: 15, en: "Java Files & System Resource Handling", ar: "التعامل مع الملفات وإدارة موارد النظام في جافا" },
      ]
    },
    {
      week: "الأسبوع الرابع: Week 4",
      title: "The OOP Revolution (البرمجة كائنية التوجه)",
      days: [
        { d: 16, en: "Introduction to OOP: Classes & Objects", ar: "مقدمة في الـ OOP: الأصناف والكائنات" },
        { d: 17, en: "Data Protection: Encapsulation & Access", ar: "حماية البيانات: التغليف وصلاحيات الوصول" },
        { d: 18, en: "Code Reusability: Inheritance Deep Dive", ar: "إعادة استخدام الكود: غوص عميق في الوراثة" },
        { d: 19, en: "Advanced OOP: Polymorphism & Abstraction", ar: "الـ OOP المتقدم: تعدد الأشكال والتجريد" },
        { d: 20, en: "Engineering Interfaces: Design Patterns", ar: "هندسة الواجهات البرمجية وأنماط التصميم" },
      ]
    },
    {
      week: "الأسبوع الخامس: Week 5",
      title: "Pro Tools & Databases (الأدوات وقواعد البيانات)",
      days: [
        { d: 21, en: "UI Logic: JavaFX Foundations", ar: "منطق واجهات المستخدم: أساسيات JavaFX" },
        { d: 22, en: "Git & GitHub: Version Control for Devs", ar: "نظام Git وGitHub: التحكم في الإصدارات للمطورين" },
        { d: 23, en: "Database Mastery I: ERD & Relational Design", ar: "إتقان قواعد البيانات (1): التصميم الهيكلي والـ ERD" },
        { d: 24, en: "SQL Essentials: DDL, DML & Basic Queries", ar: "أساسيات SQL: لغة التعريف، التلاعب بالبيانات والاستعلام" },
        { d: 25, en: "Advanced SQL: Joins, Logic & Optimization", ar: "SQL المتقدم: ربط الجداول، المنطق وتحسين الأداء" },
      ]
    },
    {
      week: "الأسبوع السادس: Week 6",
      title: "Web Foundations (أساسيات الويب الحديث)",
      days: [
        { d: 26, en: "Web Architecture: HTTP, Servers & APIs", ar: "بنية الويب: بروتوكول HTTP، الخوادم والـ APIs" },
        { d: 27, en: "Web Structure & Styling: HTML5 & CSS3", ar: "هيكلة وتصميم الويب: أساسيات HTML5 و CSS3" },
        { d: 28, en: "Modern JavaScript I: Core Logic & Syntax", ar: "الجافا سكريبت الحديثة (1): المنطق والقواعد" },
        { d: 29, en: "Modern JavaScript II: DOM & Events", ar: "الجافا سكريبت الحديثة (2): التحكم في الصفحة والأحداث" },
        { d: 30, en: "Asynchronous JS: Fetch & API Integration", ar: "الجافا سكريبت غير المتزامنة: جلب البيانات ودمج الـ API" },
      ]
    },
    {
      week: "الأسبوع السابع: Week 7",
      title: "Full-Stack Development (التطوير الشامل)",
      days: [
        { d: 31, en: "Spring Boot I: REST API Architecture", ar: "سبرينغ بوت (1): بنية واجهات الـ REST API" },
        { d: 32, en: "Spring Boot II: Data JPA & Database Wiring", ar: "سبرينغ بوت (2): الربط مع قواعد البيانات (JPA)" },
        { d: 33, en: "Spring Boot III: Services & Validation", ar: "سبرينغ بوت (3): طبقة الخدمات والتحقق من البيانات" },
        { d: 34, en: "React Foundations: Components & State", ar: "أساسيات ريآكت: المكونات وحالة البيانات (State)" },
        { d: 35, en: "Full-Stack Integration: Spring & React App", ar: "الدمج الشامل: بناء تطبيق متكامل (Spring & React)" },
      ]
    },
    {
      week: "الأسبوع الثامن: Week 8",
      title: "The Professional Horizon (آفاق الهندسة والعلوم)",
      days: [
        { d: 36, en: "Software Engineering: SDLC & Agile/Scrum", ar: "هندسة البرمجيات: دورة حياة النظام ومنهجية Agile" },
        { d: 37, en: "CS Fields I: AI, Machine Learning & Data", ar: "مجالات علوم الحاسوب (1): الذكاء الاصطناعي والبيانات" },
        { d: 38, en: "CS Fields II: Cybersecurity & Networking", ar: "مجالات علوم الحاسوب (2): الأمن السيبراني والشبكات" },
        { d: 39, en: "CS Fields III: BI, DevOps & Business Analysis", ar: "مجالات علوم الحاسوب (3): ذكاء وتحليل الأعمال والـ DevOps" },
        { d: 40, en: "The Career Blueprint: Roadmap & Discussion", ar: "المخطط المهني: خارطة الطريق والنقاشات" },
      ]
    }
  ];

  return (
    <div className="course-details-page">
      <section className="course-hero">
        <div className="container">
          <h1>برنامج الدورة التي نقدمها</h1>
          <p className="hero-subtitle">من الصفر حتى القدرة على الانطلاق بمسيرتك المهنية والتعمق في المجالات</p>
          
          <div className="course-stats">
            <div className="stat-item">
              <span className="stat-icon">🕒</span>
              <div className="stat-info"><strong>60 ساعة</strong><span>تدريبية - ساعة ونصف مدة المحاضرة</span></div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">📅</span>
              <div className="stat-info"><strong>40 يوم</strong><span>مدة البرنامج</span></div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🚀</span>
              <div className="stat-info"><strong>12 / 4</strong><span>تاريخ الانطلاق</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-features">
        <div className="container">
          <div className="feature-box">
            <h3>📝 التقييم والمتابعة</h3>
            <p>الطرق التي نتبعها في إعطاء الدورة والمتابعة:</p>
            <ul>
              <li><strong>تاسكات يومية:</strong> تطبيق عملي بعد المحاضرة.</li>
              <li><strong>تاسكات أسبوعية:</strong> مهام أسبوعية للقيام بها</li>
              <li><strong>مواضيع نقاشية:</strong> مواضيع لمناقشتها عن شتى مجالات علم الحاسوب</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="syllabus-section">
        <div className="container">
          <h2 className="section-title">المخطط الدراسي الشامل (40 محاضرة)</h2>
          <div className="syllabus-container">
            {syllabus.map((weekData, index) => (
              <div key={index} className="week-card">
                <div className="week-header">
                  <h4>{weekData.week}</h4>
                  <h3>{weekData.title}</h3>
                </div>
                <div className="days-table">
                  <div className="table-header">
                    <span>اليوم</span>
                    <span>الموضوع (English)</span>
                    <span>الترجمة العربية</span>
                  </div>
                  {weekData.days.map((day) => (
                    <div key={day.d} className="table-row">
                      <span className="day-num">{day.d}</span>
                      <span className="en-title">{day.en}</span>
                      <span className="ar-title">{day.ar}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;