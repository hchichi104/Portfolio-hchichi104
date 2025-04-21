import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Project from './pages/Project';
import Design from './pages/Design';
import Footer from './component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const [hover, setHover] =useState(false)

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease',
      once: false,
      delay: 100,
    });
  }, []);

  return (
    <>
    <Header hover={hover} />
    <Home hover={hover} setHover={setHover}/>
    <Aboutme />
    <Project />
    <Design />
    <Footer />
    </>
  );
}

/* 봐주셔서 감사합니다~ */

export default App;
