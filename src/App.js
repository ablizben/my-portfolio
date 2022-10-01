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
      <div className="home-page">
        <div className="heading">frontend developer | ui/ux engineer</div>
        <div className="line"></div>
          <Main />
        <div className="line"></div>
       <div className="nav">about | projects | contact</div>
      </div>
    </div>
  );
}

export default App;
