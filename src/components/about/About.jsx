import React from 'react';
import "./about.css";
import { MdOutlineWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import APN from '../../assets/apn_logo.png';
import ADU from '../../assets/adu_logo.png';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
          As a Computer Science graduate, I am eager to launch my career in Software Development and apply my skills in a professional setting. I am passionate about continuous learning and growth, and actively seeking opportunities to further develop my skills while contributing positively to a collaborative team environment. I am confident in my commitment to excellence and believe that my enthusiasm for growth makes me a valuable asset to any team.
          </p>

          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWork className='about__icon' />
              <h5>Experience</h5>

              <div className="about__details-container">
                <div className="about__details-img">
                  <img src={APN} alt="AltPayNet Logo" />
                </div>
                <div className="about__details-text">
                  <ul>
                    <li><b>Role:</b> DevSecOps Intern</li>
                    <li><b>Company:</b> AltPayNet Corp.</li>
                    <li><b>Duration:</b> February 2023 - May 2023</li>
                  </ul>
                </div>
              </div>
            </article>
            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Education</h5>

              <div className="about__details-container">
                <div className="about__details-img">
                  <img src={ADU} alt="Adamson Logo" />
                </div>
                <div className="about__details-text">
                  <ul>
                    <li><b>Program:</b> Bachelor of Science in Computer Science, Data Science Specialization</li>
                    <li><b>University:</b> Adamson University</li>
                    <li><b>Duration:</b> August 2019 - July 2023</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
