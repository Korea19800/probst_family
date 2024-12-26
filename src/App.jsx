import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import About2 from './components/About2';
import About3 from './components/About3';
import About4 from './components/About4';
import About5 from './components/About5';
import About6 from './components/About6';
import About7 from './components/About7';

import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 anitialiased
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      {/* background color */}  
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
        {/* navbar <Navbar/> */} 
        <Hero />
        <About/>
        <About2/>
        <About3/>
        <About4/>
        <About5/>
        <About6/>
        <About7/>
        <Contact/>
      </div>
    </div>
  );
};

export default App