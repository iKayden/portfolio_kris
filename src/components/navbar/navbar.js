import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo_grey.png";
import { Link } from 'react-scroll';
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='navbar-logo'></img>
      <div className='navbar-menu'>
        <Link activeClass='active'
          to='main' spy={true} smooth={true} offset={-200} duration={500} className='navbar-menu__item'>
          Home
        </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true}
          offset={-100} duration={500} className='navbar-menu__item'>
          About
        </Link>
        {/* <Link activeClass='active' to='portfolio' spy={true}
          smooth={true} offset={-100} duration={500}
          className='navbar-menu__item'>Showreel</Link> */}
        <Link activeClass='active' to='portfolio' spy={true}
          smooth={true} offset={-100} duration={500}
          className='navbar-menu__item'>
          Portfolio
        </Link>
      </div>

      <button className='navbar-contactButton' onClick={() => {
        document.getElementById('contact-container').scrollIntoView({ behavior: "smooth" });
      }}>
        <img src={contactImg} alt='' className='navbar-contactButton__image' />
        Contact Me
      </button>

      <img src={menu} alt='menu' className='navbar-burger' onClick={() => setShowMenu(!showMenu)} />
      <div className='navbar-menu__burger' style={{ display: showMenu ? "flex" : "none" }} >
        <Link activeClass='active'
          to='main' spy={true} smooth={true} offset={-200} duration={500} className='navbar-menu__burger-item' onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true}
          offset={-50} duration={500} className='navbar-menu__burger-item' onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass='active' to='contact-container' spy={true}
          smooth={true} offset={-100} duration={500}
          className='navbar-menu__burger-item' onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link activeClass='active' to='portfolio' spy={true}
          smooth={true} offset={-100} duration={500}
          className='navbar-menu__burger-item' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav >
  );
};

export default Navbar;
