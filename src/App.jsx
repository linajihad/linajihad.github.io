import React from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Methodology from './components/Methodology/Methodology';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSlider />
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}

export default App;