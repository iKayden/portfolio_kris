import React from 'react';
import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import youtubeIcon from '../../assets/youtube.png';
import instaIcon from '../../assets/instagram.png';
import linkedInIcon from '../../assets/linkedIn.png';

function Contact() {
  return (
    <section id='contact-container'>
      <h1 className='contact-title'>Contact Me</h1>
      <span className='contact-description'>Please fill out the form below to discuss any work opportunities.</span>
      <form className='contact-form'>
        <input type='text' className='contact-form__name' placeholder='Your Name' />
        <input type='text' className='contact-form__email' placeholder='Your Email' />
        <textarea name='message' className='contact-form__message' rows="5" placeholder='Your Message'></textarea>
        <button className='contact-form__sub-btn'>Submit</button>
        <div className='link-container'>
          <img src={facebookIcon} alt='facebook logo' className='link-image' />
          <img src={youtubeIcon} alt='youtube logo' className='link-image' />
          <img src={instaIcon} alt='instagram logo' className='link-image' />
          <img src={linkedInIcon} alt='linkedIn logo' className='link-image' />
        </div>
      </form>

    </section>
  );
};

export default Contact;
