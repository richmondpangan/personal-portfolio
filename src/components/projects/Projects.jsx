import React from 'react';
import "./projects.css";
import IMG1 from "../../assets/recipe-finder-app-snap.png";
import IMG2 from "../../assets/to-do-list-app-snap.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Recipe Finder App',
    github: 'https://github.com/richmondpangan/recipe-finder-app',
    demo: 'https://recipe-finder-app-pi.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'To-Do List App',
    github: 'https://github.com/richmondpangan/to-do-list-app',
    demo: 'https://richmondpangan.github.io/to-do-list-app/'
  }
];

function Projects() {
  return (
    <section id='projects'>
      <h5>Browse My Recent</h5>
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
