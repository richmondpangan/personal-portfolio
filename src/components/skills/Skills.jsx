import React from 'react';
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJava, FaPython, FaGitAlt, FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


function Skills() {
  return (
    <section id='skills'>
      <h5>Explore My</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <RiJavascriptFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <DiJqueryLogo className='experience__details-icon' />
              <div>
                <h4>jQuery</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiSpring className='experience__details-icon' />
              <div>
                <h4>Spring</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h3>Other Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaGitAlt className='experience__details-icon' />
              <div>
                <h4>Git</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaFigma className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
