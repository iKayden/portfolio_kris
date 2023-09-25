import React from 'react';
import "./about.css";
import houdiniLogo from "../../../assets/houdini-logo.png";
import mayaLogo from "../../../assets/maya-logo.png";
import adobeProLogo from "../../../assets/adobePro-logo.png";

const About = () => {
  return (
    <section id='about'>
      <span className='about-title'>What I do</span> <br />
      <span className='about-description'>I am a skilled and passionate visual effects artist with experience in creating visually stunning animations and effects. I am proficient in Houdini, Maya and Adobe Premier Pro.</span>
      <div className='about-skill__box'>
        <div className='about-skill'>
          <img src={houdiniLogo} alt='Houdini Skill' className='about-skill__img' />
          <div className='about-skill__text'>
            <h2 className='about-skill__header'>Houdini</h2>
            <p className='about-skill__paragraph'>Test test Test test Test test</p>
          </div>
        </div>
        <div className='about-skill'>
          <img src={mayaLogo} alt='Maya Skill' className='about-skill__img' />
          <div className='about-skill__text'>
            <h2 className='about-skill__header'>Maya</h2>
            <p className='about-skill__paragraph'>Test testTest testTest testTest testTest test</p>
          </div>
        </div>
        <div className='about-skill'>
          <img src={adobeProLogo} alt='Adobe Premier Pro Skill' className='about-skill__img' />
          <div className='about-skill__text'>
            <h2 className='about-skill__header'>Adobe Premier Pro</h2>
            <p className='about-skill__paragraph'>Test testTest testTest testTest testTest test</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
