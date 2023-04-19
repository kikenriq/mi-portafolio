import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
    </main>
    </>
  );
}

export default App;
