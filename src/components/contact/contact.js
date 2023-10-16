import React, { useRef } from 'react';
import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import youtubeIcon from '../../assets/youtube.png';
import instaIcon from '../../assets/instagram.png';
import linkedInIcon from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qcccbu7', 'template_8l99ugc', form.current, 'yHYE0vM3uJcphtWDY')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email Sent!");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact-container'>
      <h1 className='contact-title'>Contact Me</h1>
      <span className='contact-description'>Please fill out the form below to discuss any work opportunities.</span>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type='text' className='contact-form__name' placeholder='Your Name' name='from_name' />
        <input type='text' className='contact-form__email' placeholder='Your Email' name='from_email' />
        <textarea name='message' className='contact-form__message' rows="5" placeholder='Your Message'></textarea>
        <button type='submit' className='contact-form__sub-btn' value='Send'>Submit</button>
        <div className='link-container'>
          <a href='https://www.facebook.com/kitizgray'>
            <img src={facebookIcon} alt='facebook logo' className='link-image' />
          </a>
          <a href='https://www.youtube.com/@kristinaopaiets5069'>
            <img src={youtubeIcon} alt='youtube logo' className='link-image' />
          </a>
          <a href='https://www.instagram.com/kristina_opaiets_fx/'>
            <img src={instaIcon} alt='instagram logo' className='link-image' />
          </a>
          <a href='https://www.linkedin.com/in/kristina-opaiets/'>
            <img src={linkedInIcon} alt='linkedIn logo' className='link-image' />
          </a>
        </div>
      </form>

    </section>
  );
};

export default Contact;
