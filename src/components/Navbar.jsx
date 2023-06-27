import React, {useState} from 'react';
import { AiOutlineUnorderedList, AiOutlineClose, AiFillHome, AiFillProject} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs'
import {MdWorkHistory} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import '../styles.css';

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between 
    items-center p-7">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)}className="cursor-pointer">
          <AiOutlineUnorderedList size={35} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-3xl px-2'>
          Wioletta <span>Koczor</span>
        </h1>
      </div>
      {/* Right side */}
      <div className="navbar-right">
        {/* Add any additional content for the right side */}
      </div>
      {/* Contact button */}
    <button className='bg-custom-green text-white hidden md:flex 
    items-center py-2 rounded-full'>
        <BsPersonFill size={20} className='mr-2' />Contact
    </button>

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
        <h2 className='text-2xl p-4'>
          Wioletta <span>Koczor</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-3 flex'><AiFillHome
            size={25} className='m-1' /> Home</li>
            <li className='text-xl py-3 flex'><GiSkills
            size={25} className='m-1' /> Skills</li>
            <li className='text-xl py-3 flex'><MdWorkHistory
            size={25} className='m-1' /> Experience</li>
            <li className='text-xl py-3 flex'><AiFillProject
            size={25} className='m-1' /> Projects</li>

          </ul>
        </nav>

    </div>      
    </div>
  );
};

export default Navbar;

