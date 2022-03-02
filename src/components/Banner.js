import React from 'react';
import haikeiURL from '../assets/wave-haikei.svg';
import ozfull from '../assets/oz-full-large.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return <div className="banner"> 
    <div className="haikei">
        <img className="wave" src={haikeiURL} alt='wave'/>
        <div className="hero-banner">
            <div className="intro-container">
                <h2>Hi, I’m Oscar Zarate. </h2>
                <p>I am a business administrator turned developer. <br/> Starting with front end projects and aiming to be a full stack developer.</p>
                <div className="shortcut">
                    <FontAwesomeIcon icon={faGithub}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <FontAwesomeIcon icon={faFile}/>
                </div>
            </div>
            <div className="ozfull-container">
                <img src={ozfull} alt='oz'/>
            </div>
        </div> 
    </div>
      
  </div>
} 

export default Banner;