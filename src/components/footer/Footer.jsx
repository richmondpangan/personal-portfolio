import React from 'react';
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/login" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/" target='_blank'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LOGO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
