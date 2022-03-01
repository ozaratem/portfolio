import React from 'react';
import head1 from '../assets/oz-head-inverse.png';

function Navbar() {
  return <div className="navbar">
          <div className="navbar-logo">
            <img src={head1} alt="logo1" />
          </div>
          <div className="navbar-btn">
            <button className="btn">About</button>
            <button className="btn">Portfolio</button>
            <button className="btn">Contact</button>
          </div>
  </div>

}

export default Navbar;