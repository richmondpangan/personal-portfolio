import React from 'react';
import "./nav.css";
import { HiOutlineHome, HiOutlineCode } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { BiBrain } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RxPerson /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBrain /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><HiOutlineCode /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMailOutline /></a>
    </nav>
  )
}

export default Nav
