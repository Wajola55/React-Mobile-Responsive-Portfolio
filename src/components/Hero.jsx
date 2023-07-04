import React from 'react';
import Wiola from './images/Wiola.png';
import Github from './images/github.png';
import Instagram from './images/instagram.png';
import Linkedin from './images/linkedin.png';
import '../styles.css';

const Hero = () => {
    return (
        <div className='sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto p-4 hero-container'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full flex flex-col justify-start items-start'>
                    <h1 className='px-2 text-2xl sm:text-3xl md:text-3xl lg:text-7xl font-bold'>Hi there!<span> I am</span></h1>
                    <h1 className='px-2 text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-custom-green'>Wioletta <span>Koczor</span></h1>
                    <div className='narrow-text mt-4'>
                        <p className="narrow-text-content">
                            A Python fan, diving into the digital pool, splashing around with code, and having a blast one line at a time. With an insatiable appetite for knowledge, I'm constantly exploring new realms of programming, perfecting my craft, and staying on the cutting edge of industry trends. I believe that learning should be fun, so I mix amusement with ambition as I build an ever-growing arsenal of programming skills.
                            <br /><br />
                            Join me on this epic journey as we tackle coding conundrums, debug dilemmas, unravel the mysteries of algorithms, and master the art of software sorcery. As we navigate the vast seas of syntax and sail through the swirling storms of software development, we'll share a few laughs, learn some valuable lessons, and grow together as we conquer each challenge.
                            <br /><br />
                            Step into the wild world of Wioletta's wacky web dev wonderland, where code comes to life, and the digital adventure never ends! Welcome aboard, fellow coding enthusiasts - let's make some magic together!
                        </p>
                        <div className="i-icons">

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
                </div>
                <img
                    src={Wiola}
                    alt=""
                    style={{
                        width: '90px',
                        float: 'right',
                        marginRight: '10px',
                        marginTop: '-20px',
                        
                    }}
                />
            </div>
        </div>
    );
};



export default Hero;
