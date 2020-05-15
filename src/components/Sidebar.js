import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import logo from '../assets/images/logo_silver1.png';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      
      <h2 id="header-logo">
        <Link to="/"><img src={logo}></img></Link>
      </h2>
  {/* Comment out to disable menu */}
      {/* <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div> */}
  {/* Comment out to disable menu */}
    </header>
  );
}
