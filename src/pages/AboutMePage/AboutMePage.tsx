import React from 'react';
import './aboutMePage.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { aboutMeItems } from '../../data/contentData';

const AboutMePage: React.FC = () => {
    return (
       <>
       <Header/>
       <div className='about-me'>
        <div className='title'>About Me</div>
        <div className="subtitle"> Welcome to my personal space! I’m Dmitry Valak, Front-end developer. Practitioner of website layoutbased.  With a strong foundation in HTML, CSS, JavaScript, and React, I build responsive and dynamic websites that bring ideas to life. My journey in web development is complemented by my interest in photography, where I capture moments and stories through my lens. I curate photo albums that showcase my life, travels, and experiences, merging my technical skills with my creative pursuits.</div>
        <div className="subtitle">Feel free to explore my projects and photo albums to get a glimpse into my work and personal adventures.</div>
       <div className="about-me-content d-flex justify-content-between">
      {aboutMeItems.map((item, index) => (
        <div className="about-me__item" key={index}>
          <Link to={`/about/${item.title.toLowerCase().replace(/ /g, '-')}`}>
            <img src={item.src} alt={item.title} className="img-fluid" />
            <p className="about-me__item--title">{item.title}</p>
            <p className="about-me__item--subtitle">{item.subtitle}</p>
          </Link>
        </div>
      ))}
    </div>
    </div>
      </> 
    );
  };
  
  export default AboutMePage;