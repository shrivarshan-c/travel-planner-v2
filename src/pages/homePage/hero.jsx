import React, { useEffect } from 'react';
import './hero.css';
import heroImage from '../../assets/hero8.jpg';

import Nav from '../navpage/nav';
import HomeButton from '../../ui/homeButton';
import gsap from "gsap";

function Hero() {
 useEffect((()=>{

    }),[])
    
  return (
    <div className="hero">
      <div className="image">
        <img src={heroImage} alt="hero" />
      </div>


      <Nav />

      <div className='hero-text'>

      <h1>Welcome to The Mist District</h1>
      <p> <span>From Munnar tea trails to Coorg coffee hillscold mornings</span> — every wrong turn leads to something beautiful.</p>
      <HomeButton/>
      </div>


<div>


</div>
    </div>
  );
}

export default Hero;
