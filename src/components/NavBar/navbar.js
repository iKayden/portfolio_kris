import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo_grey.png";
import { Link } from 'react-scroll';
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='navbar-logo'></img>
      <div className='navbar-menu'>
        <Link className='navbar-menu__item'>Home</Link>
        <Link className='navbar-menu__item'>Demo Reel</Link>
        <Link className='navbar-menu__item'>About</Link>
        <Link className='navbar-menu__item'>Portfolio</Link>
      </div>

      <button className='navbar-contactButton'>
        <img src={contactImg} alt='' className='navbar-contactButton__image' />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
