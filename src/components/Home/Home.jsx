import React, { useState, useEffect } from 'react';
import './Home.css'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  return (
    <section id="Home" className="Home bg-gray-700 text-white flex justify-center items-center h-full">
      <div className="container mx-auto flex justify-center items-center h-full flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm <span className="text-blue-500">Jovanny</span></h1>
          <p className="text-lg md:text-2xl mt-4">
            I'm a
            <span className="text-blue-500">
              <Typewriter
                words={[' Web Developer', ' Mobile App Developer', ' Full-Stack Developer']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </p>
          <div className="flex justify-center mt-4 space-x-4 md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-500 duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 duration-300" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-300 duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-blue-400 duration-300" />
            </a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 mt-4 rounded">Resume</button>
        </div>
        <div className="hero-image w-full md:w-1/2">
          <img src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/432734031_2010510319345848_2127213268372075047_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGO1sG3iqKDaUp9R8YrtSP2Bi04nl-u7FcGLTieX67sV3I2hD2z0eJ3SiiJaXFkmEP2SGzKZGJVw6SLYyp_iiD7&_nc_ohc=njYoVB2TNbQQ7kNvgHbohmp&_nc_oc=AdiaoVnuvQkAd5ZqlYsvh7zRURscwATNTichJvFHAGqFptx_bOz_uw6k_J6GpNyFemc&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=AFKbtcLbHfRfgBSlPlXNAeG&oh=00_AYB06wblSJffWfbZPG5SNUmV3A0AqQ9TjmKUCvU310zRLg&oe=67B69660" />
        </div>
      </div>
    </section>
  );
};

export default Home;
