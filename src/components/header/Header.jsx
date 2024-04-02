import React from 'react';
import "./header.css";
import CTA from './CTA';
import IMG from '../../assets/profile.png';

function Header() {
  return (
    <header>
      <div className="container header__container">
        
        <div className="header__content">
          <h5 className='greeting'>Hello, I'm</h5>
          <h1>Richmond Pangan</h1>
          <h5>Computer Science Graduate | Aspiring Software Engineer</h5>
          <CTA />
        </div>

        <div className="header__me">
          <div className="header__me-image">
            <img src={IMG} alt="About Image" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
