import React from 'react';
import "./main.css";
import mainImage from "../../assets/imagek.png";
import { Link } from 'react-scroll';
import btnImg from "../../assets/play.png";
import downloadImg from "../../assets/download.png";

const Main = () => {
  return (
    <section id='main'>
      <div className='main-content'>
        <span className='main-intro__hello'>Hello,</span>
        <span className='main-intro__text'>I'm <span className='main-intro__name'>Kristina</span> <br />VFX Artist</span>
        <p className='main-intro__paragraph'>I am a skilled visual effects artist with passion in creating stunning looking animations.</p>
        <div className='main-button_box'>
          <Link>
            <button className='main-button' >
              <img src={btnImg} alt='play video' className='main-button__image' />
              Showreel
            </button>
          </Link>
          <Link>
            <button className='main-button' id='resume-button'>
              <img src={downloadImg} alt='play video' className='main-button__image' />
              Resume
            </button>
          </Link>
        </div>
      </div>
      <img src={mainImage} alt='portrait' className='main-image'></img>
    </section>
  );
};

export default Main;
