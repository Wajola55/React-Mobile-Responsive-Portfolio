import React from 'react';
import '../styles.css';
import Bitcoin from './images/bitcoin.png';
import Sales from './images/sales.png';
import App from './images/app.png';
import Calculator from './images/calculator.png';

const Projects = () => {
  return (
    <div className='experience-container'>
      <h1 className='px-2 text-2xl sm:text-3xl md:text-3xl lg:text-7xl font-bold'>Recent<span> Projects</span></h1>
      <h1 className='px-2 text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-custom-green'> <span>Portfolio</span></h1>

      <div className="project-row">
        <div className="project">
          <a href="https://github.com/Wajola55/Bitcoin-Price" target="_blank" rel="noopener noreferrer">
            <img src={Bitcoin} alt="Bitcoin Price App" />
          </a>
          <div className="slide-title">Bitcoin Price App</div>
        </div>

        <div className="project">
          <a href="https://github.com/Wajola55/Sales-Dashboard-App" target="_blank" rel="noopener noreferrer">
            <img src={Sales} alt="Sales Dashboard" />
          </a>
          <div className="slide-title">Sales Dashboard</div>
        </div>
      </div>

      <div className="project-row">
        <div className="project">
          <a href="https://github.com/Wajola55/Stock-Price-App" target="_blank" rel="noopener noreferrer">
            <img src={App} alt="Stock Price" />
          </a>
          <div className="slide-title">Stock Price</div>
        </div>

        <div className="project">
          <a href="https://github.com/Wajola55/Food_calorie_calculator" target="_blank" rel="noopener noreferrer">
            <img src={Calculator} alt="Food Calculator" />
          </a>
          <div className="slide-title">Food Calculator</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
