import React from 'react';
import './portfolio.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 className='portfolio-title'>My Portfolio</h2>
      <span className='portfolio-description'>I take pride in paying attention to the smallest details and making sire that my work is pixel perfect. I am excited to bring my skills and experience to help companies create perfect visual effects for their projects.</span>
      <div className='portfolio-container'>
        <img src={portfolio1} alt='' className='portfolio-image' />
        <img src={portfolio2} alt='' className='portfolio-image' />
        <img src={portfolio3} alt='' className='portfolio-image' />
        <img src={portfolio4} alt='' className='portfolio-image' />
        <img src={portfolio5} alt='' className='portfolio-image' />
        <img src={portfolio6} alt='' className='portfolio-image' />
      </div>
      <button className='portfolio-button'>See More</button>
    </section>
  );
}

export default Portfolio;
