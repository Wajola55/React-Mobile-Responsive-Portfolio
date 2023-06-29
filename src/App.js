import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Navbar />
      <div id='home'><Hero /></div>
      <div id='skills'><Skills /></div>
      <div id='experience'><Experience /></div>
      <div id='projects'><Projects /></div>
      <div id='contact'><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
