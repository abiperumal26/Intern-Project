import React from 'react';
import '../Css/Details.css';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Details = () => {
    return (
        <div className="container">
            <div className="details">
                <div className="address-section">
                    <h2>Lugar</h2>
                    <ul className="address">
                        <li>
                            <IoLocationOutline />
                            2118 Thornridge Cir.<br />
                            Dubai, UAE 35624<br /><br />
                            <LuPhone className='phone' />  +33 415 65356 - 9<br /><br />
                            <MdOutlineEmail className='email' />contact@lugar.com
                        </li>
                    </ul>
                </div>
                <div className="quick-links-section">
                    <h2>Quick links</h2>
                    <ul className='arrange'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="legal-links-section">
                    <h2>Legal Links</h2>
                    <ul className='arrange'>
                        <li>Terms</li>
                        <li>Conditions</li>
                        <li>Policy</li>
                    </ul>
                </div>
                <div className="social-media-section">
                    <h2>Social Media</h2>
                    <ul className='arrange'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
               
            </div>
            <p style={{
                marginLeft:'-1020px',
                padding:'80px',
                color: '#BDBDBD',
                marginBottom:'-60px'

            }}>Copyright @ 2022 Lugar Inc.</p>
        </div>
    );
}

export default Details;
