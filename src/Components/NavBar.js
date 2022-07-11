import React, { useState, useEffect } from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';


export default function NavBar() {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  return (
    <div className="NavBar">
        <Router>
        <div className="logo">Abby Benjamin</div>
        <div className="nav-right-links">
            <NavLink to='/aboutme'>about me</NavLink>
            <NavLink to='/projects'>projects</NavLink>
            <NavLink to='/contact'>contact</NavLink>
        </div>
        </Router>
    </div>
  )}