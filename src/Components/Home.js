import React from 'react';
import '../Css/Home.css';
import House from '../Images/House1.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Nav'>
        <div className='Logo'>LUGAR</div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='sec'>
        <h1>A home is built with love and dreams</h1>
        <p>Real estate firm that makes your dreams true</p>
        <div className='but'>
          <button className='Our'>Our Projects</button>
          <button className='Us'>Contact Us</button>
        </div>
      </div>
      <div className='button'>
        <img src={House} alt='House' />
      </div>
    </div>
  );
};

export default Home;
