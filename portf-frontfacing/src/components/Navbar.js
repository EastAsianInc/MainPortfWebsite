import React, { useState, useEffect, useRef } from 'react';  // remove unnecessary imports here
import { Link, useLocation } from 'react-router-dom';  // combined imports
import Hamburger from './Hamburger';
import '../../src/Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 500);
  }, [location]);

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : ''} ${!visible ? 'navbar-fading' : ''}`}>
      <div className="hamburger-container" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger />
      </div>
      <ul className={`navbar-list ${menuOpen ? 'menu-open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;