import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد المكونات
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Methodology from './components/Methodology/Methodology';
import Register from './components/Register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails'; // السطر الجديد

function App() {
  return (
    <Router>
      <div className="App" style={{ direction: 'rtl' }}>
        <Header />
        
        <main>
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route path="/" element={
              <>
                <HeroSlider />
                <Methodology />
              </>
            } />

            {/* صفحة تفاصيل الدورة - الروت الجديد */}
            <Route path="/course-details" element={<CourseDetails />} />

            {/* صفحة التسجيل */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;