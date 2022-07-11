import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <AboutMe />
      <Projects />
      <Contact />
  

    </div>
  );
}

export default App;
