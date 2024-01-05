
import React from 'react';
import House from './House1.png';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="nav">
                <div className="logo">LUGAR</div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="content">
                <div className="textContent">
                    <h1>A home is 
                        <br />
                        built with love <br />
                        and dreams</h1>
                        <p>Real estate farm that makes your dreams true</p>
                    <div className="buttonContainer">
                        <button className="button">Our Projects</button>
                        <button className="button1">Contact Us</button>
                    </div>
                </div>
                <img src={House} alt="House" />
            </div>
        </div>
    )
}
export default Home;