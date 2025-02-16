import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Header.css';

const Header = () => {

    return (
        <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center flex-row fixed w-full z-10 mb-4">
            <h1 className="text-3xl font-semibold"><a href='/'>Vanny</a></h1>

            {/* Desktop navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-6 gap-6">
                    <li>
                        <Link to="Home" smooth={true} duration={500} className='menu-item hover:text-gray-400 transition duration-300'>Home</Link>
                    </li>
                    <li>
                        <Link to="About" smooth={true} duration={500} className='menu-item hover:text-gray-400 transition duration-300'>About</Link>
                    </li>
                    <li>
                        <Link to="Skills" smooth={true} duration={500} className='menu-item hover:text-gray-400 transition duration-300'>Skills</Link>
                    </li>
                    <li>
                        <Link to="Projects" smooth={true} duration={500} className='menu-item hover:text-gray-400 transition duration-300'>Projects</Link>
                    </li>
                    <li>
                        <Link to="Contact" smooth={true} duration={500} className='menu-item hover:text-gray-400 transition duration-300'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile */}
            <div className="md:hidden flex items-center">
                <nav className="md:hidden w-full bg-gray-800 text-white">
                    <ul className="flex flex-col items-center space-y-4">
                        <li>
                            <Link to="Contact" smooth={true} duration={500} className='bg-blue-600 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mt-4 rounded'><button style={{cursor:'pointer'}}>Contact Me</button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
