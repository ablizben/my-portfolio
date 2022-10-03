import './App.css';
import React, { useState } from 'react';
import Main from './Components/Main';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';

function App() {
  const [active, setActive] = useState("MainComp");

  return (
    <div className="App">
      <div className="home-page">
        <div className="heading">frontend developer | ui/ux engineer</div>
        <div className="line"></div>
          {active === "MainComp" && <Main />}
          {active === "AboutComp" && <AboutMe />}
          {active === "ContactComp" && <Contact />}
        <div className="line"></div>
        <div className="nav">
          <div id="main" onClick={() => setActive("MainComp")}>home &nbsp;</div>|
          <div id="about" onClick={() => setActive("AboutComp")}> &nbsp; about &nbsp;</div>|
          <div id="contact" onClick={() => setActive("ContactComp")}> &nbsp; contact</div>
          </div>
      </div>
    </div>
  );
}

export default App;
