import React from 'react';
import '../styles.css';
import Github from './images/github.png';
import Instagram from './images/instagram.png';
import Linkedin from './images/linkedin.png';

const Footer = () => {

  return (
    <div className='experience-container'>
    <h1 className='px-2 text-xl sm:text-1xl md:text-2xl lg:text-4xl font-bold'>
        <span>koczorwioletta@gmail.com</span>
    </h1>
    <div className="i-footer">
 
        <a href="https://github.com/Wajola55" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/wioletta-koczor-3b8a02265/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="" />
        </a>
        <a href="https://www.instagram.com/wiolettakoczor/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
