import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Projects from './components/projects';
import './index.css'; // Import your CSS file

function App() {
  
const locomotiveScroll = new LocomotiveScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > prevScrollY) {
  //       // Scrolling down, hide navbar
  //       document.getElementById('navbar').style.top = '-100%';
  //     } else {
  //       // Scrolling up, show navbar
  //       document.getElementById('navbar').style.top = '0';
  //     }

  //     setPrevScrollY(currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollY]);

  return (
    
    <div className="w-full bg-zinc-900" id="main">
      <Navbar />
      <Banner />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
    </div>
  );
}

export default App;
