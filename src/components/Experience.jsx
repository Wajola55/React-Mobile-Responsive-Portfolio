import React from 'react';
import '../styles.css';

const Experience = () => {
    return (
        <div className='experience-container'>
            <h1 className='px-2 text-2xl sm:text-3xl md:text-3xl lg:text-7xl font-bold'>
                <span>Experience</span>
            </h1>
            <div className="experience-content">
                <div className="circle">
                    <span className="tech-name">Python</span>
                    <span className="experience-years">2 years</span>
                </div>
                <div className="circle">
                    <span className="tech-name">Pandas</span>
                    <span className="experience-years">1 year</span>
                </div>
                <div className="circle">
                    <span className="tech-name">React</span>
                    <span className="experience-years">6 months</span>
                </div>
                <div className="circle">
                    <span className="tech-name">Django</span>
                    <span className="experience-years">1 year</span>
                </div>
            </div>
        </div>
    );
};                    

export default Experience;