import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../src/Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 500); // Time duration should match the transition time in CSS
  }, [location]);

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : ''}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;