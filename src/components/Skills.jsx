import React from 'react';
import '../styles.css';
import ResumeEnglish from './CV_English.Wioletta_Koczor.pdf';
import ResumePolish from './CV_Polish.Wioletta_Koczor.pdf';
import django from './images/django.png';
import dashboard from './images/dashboard.png';
import booking from './images/booking.png';
import Card from './Card.jsx';

const Skills = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 skills-container'>
            <div className='max-h-[500px] relative flex justify-between'>
                {/* Overlay */}
                <div className='w-full h-full flex flex-col justify-start items-start'>
                    <h1 className='px-2 text-2xl sm:text-3xl md:text-3xl lg:text-7xl font-bold'>My<span> Technical</span></h1>
                    <h1 className='px-2 text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-custom-green'> <span>Skills</span></h1>
                    <div className='narrow-text mt-4'>
                        <p className="narrow-text-content">
                            As a Junior Developer, my main focus is on building web applications using Python and Django. I am particularly skilled in utilizing Streamlit and Pandas to dive deep into data analysis and visualization to bring insights to life. My ultimate goal is to create applications that are both user-friendly and visually appealing, while maintaining high functionality.
                            <br /><br />
                            I am always eager to learn and expand my skillset, which allows me to explore new technologies and implement them in my work. I believe in the power of collaboration and enjoy working with teams to bring ideas to life.
                            <br /><br />
                            So, if you're looking for a passionate and driven Junior Developer to work with, then look no further! Let's work together to create something truly amazing.
                        </p>
                    </div>
                    <div className='buttons-container'>
                    <a href={ResumeEnglish} download>
                      <button className="button s-button bg-custom-green mt-4 mr-4">Download CV (English)</button>
                    </a>
                    <a href={ResumePolish} download>
                      <button className="button s-button bg-custom-green">Download CV (Polish)</button>                    
                    </a>
                    </div>
                </div>
                {/* Right Side */}
                <div className="i-right w-full">
                    {/* right side */}
                        <Card
                            django={django}
                            title="Django Web Development"
                            detail="Experience in building web applications using the Django framework."
                        />
                        <Card
                            django={dashboard}
                            title="Data Visualization & Analysis"
                            detail="Experience in data visualization and analysis using Python libraries such as Pandas and Matplotlib. Proficient in creating interactive dashboards for better data insights and decision-making. Familiar with data science concepts and techniques."
                        />
                        <Card
                            django={booking}
                            title="Mobile App Development"
                            detail="Experience in creating mobile applications for various purposes, such as calculators and video apps. Proficient in designing user interfaces and implementing app functionality."
                        />
                    </div>
                </div>
            </div>
    );
};

export default Skills;

