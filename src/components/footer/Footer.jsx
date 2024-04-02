import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>MOND</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; MOND. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
