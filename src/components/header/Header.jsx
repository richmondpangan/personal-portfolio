import React from 'react';
import "./header.css";
import CTA from './CTA';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mond</h1>
        <h5 className='text-light'>Aspiring Software Engineer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header