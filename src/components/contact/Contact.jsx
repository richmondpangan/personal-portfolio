import React from 'react';
import "./contact.css"
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__info-upper-container">
        <div className="contact__info-container">
          <MdOutlineMailOutline className='contact__icon' />
          <p><a href="mailto:panganrichmond@gmail.com">panganrichmond@gmail.com</a></p>
        </div>
        <div className="contact__info-container">
          <FaLinkedin className='contact__icon' />
          <p><a href="https://www.linkedin.com/in/richmondpangan" target='_blank'>linkedin.com/in/richmondpangan</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
