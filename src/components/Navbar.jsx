import React, {useState} from 'react';
import { AiOutlineUnorderedList, AiOutlineClose, AiFillHome, AiFillProject} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs'
import {MdWorkHistory} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'

import enFlag from './images/UK.png';
import plFlag from './images/Poland.png';

import '../styles.css';


const Navbar = () => {
  const [nav, setNav] = useState(false)


  const scrollToComponent = (componentId) => {
    document.getElementById(componentId).scrollIntoView({behavior: "smooth"});
    setNav(!nav);
  }


  const scrollToComponentOnly = (componentId) => {
    document.getElementById(componentId).scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="max-w-[2000px] mx-auto flex justify-between 
    items-center p-7 relative">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineUnorderedList size={20} />
        </div>
        <h1 className='text-xl sm:text-xl lg:text-xl px-2 name'>
          Wioletta <span>Koczor</span>
        </h1>
        <a href="http://mobile.wkoczor.pl" target="_blank" rel="noopener noreferrer">  
        <img src={enFlag} alt="English Flag" className="flag-icon" />
        </a>
        <a href="http://mobile.wkoczor.pl/PL" target="_blank" rel="noopener noreferrer">
        <img src={plFlag} alt="Polish Flag" className="flag-icon" />
        </a>
        <button 
            onClick={() => scrollToComponentOnly('Contact')} 
            className='bg-custom-green text-white flex items-center py-1 rounded-full'
        >
            <BsPersonFill size={8} className='mr-1' />Contact
        </button>
      </div>

      
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0
          left-0'></div> : ''}

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

          <AiOutlineClose
            onClick={()=> setNav(!nav)}
           size={30} className='absolute right-4
          top-4 cursor-pointer' />
          <h2 className='text-1xl p-2'>
            Wioletta <span>Koczor</span>
          </h2>
          <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-3 flex cursor-pointer' onClick={() => scrollToComponent('home')}><AiFillHome
            size={25} className='m-1' /> Home</li>
            <li className='text-xl py-3 flex cursor-pointer' onClick={() => scrollToComponent('skills')}><GiSkills
            size={25} className='m-1' /> Skills</li>
            <li className='text-xl py-3 flex cursor-pointer' onClick={() => scrollToComponent('experience')}><MdWorkHistory
            size={25} className='m-1' /> Experience</li>
            <li className='text-xl py-3 flex cursor-pointer' onClick={() => scrollToComponent('projects')}><AiFillProject
            size={25} className='m-1' /> Projects</li>
            <li className='text-xl py-3 flex cursor-pointer' onClick={() => scrollToComponent('contact')}><BsPersonFill
            size={25} className='m-1' /> Contact</li>
</ul>

      </nav>
    </div>
  </div>  
  );
};

export default Navbar;


