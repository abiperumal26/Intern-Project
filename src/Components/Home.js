import React from 'react';
import '../Css/Home.css';
import House from '../Images/House1.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Nav'>
        <div className='Logo' style={{
          marginTop:'40px',
          fontSize:'18px',
        
        }}>LUGAR</div>
        <ul  id="ul">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='sec'>
        <h1 style={{
         
          font:'Mulish',
        
        }} id="h1">A home is <br/> built with love <br/>and dreams</h1>
        <p style={{
          fontSize:'18px',
        
        }}>Real estate firm that makes your dreams true</p>
        <div className='but' style={{
        
        }}>
          <button className='Our'style={{
          fontSize:'14px',
          padding:'18px, 24px, 18px, 24px'
        }} >Our Projects</button>
          <button className='Us'>Contact Us</button>
        </div>
      </div>
      <div className='button'>
        <img src={House} alt='House' 
        />
      </div>
    </div>
  );
};

export default Home;
