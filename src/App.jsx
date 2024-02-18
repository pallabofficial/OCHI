import React from 'react';
import Navbar from './components/navbar'
import Banner from './components/banner'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Projects from './components/projects'

export default function App() {
  return (
    <div className="w-full  bg-zinc-900" id="main"> 
    <Navbar/>
    <Banner/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Projects/>
    
      
     
       
       


    </div>
  )
}
