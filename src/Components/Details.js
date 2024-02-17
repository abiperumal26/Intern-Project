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
                    <h2 style={{
                        fontSize:'18px'
                    }}>Lugar</h2>
                    <ul className="address" >
                        <li>
                            <IoLocationOutline  style={{marginRight:'100px',marginTop:'15px'}}/>
                           
                            <p className='pich' style={{marginLeft:'10px',marginTop:'-20px',
                            marginRight:'-45px',
                            fontSize:'14px' }}>
                            2118 Thornridge Cir</p>
                            <p style={{
                                marginTop:'-20px',
                                marginRight:'-45px',
                                fontSize:'14px'
                            }}>Dubai, UAE 35624</p> 
                           
                            <LuPhone className='phone'style={{
                                marginTop:'-30px', 
                                marginRight:'100px'}} />  
                            <p  style={{
                                marginTop:'-22px',
                                marginRight:'-40px',
                                fontSize:'14px' }}>+33 415 65356 - 9</p>
                            <MdOutlineEmail className='email' style={{marginTop:'-40px',marginRight:'100px'}}/>
                            <p  style={{
                                marginLeft:'10px',
                                marginTop:'-22px',
                                marginRight:'-30px' ,
                                fontSize:'14px'}}>contact@lugar.com</p>
                        </li>
                    </ul>
                </div>
                <div className="quick-links-section" style={{
                    marginLeft:'90px',
                    marginRight:'-70px'
                }}>
                    <h2 style={{
                        fontSize:'18px'

                    }}>Quick links</h2>
                    <ul  id="quick" className='arrange'style={{
                        fontSize:'14px',
                        marginTop:'5px'
                    }}>
                        <li>About</li>
                        <li>Home</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="legal-links-section" style={{
                    marginRight:'-70px'
                }}>
                    <h2 style={{
                        fontSize:'18px',
                       
                    }}>Legal Links</h2>
                    <ul id="legal" className='arrange' style={{
                        fontSize:'14px',
                        marginTop:'5px'
                    }}>
                        <li>Terms</li>
                        <li>Conditions</li>
                        <li>Policy</li>
                    </ul>
                </div>
                <div className="social-media-section"style={{
                    marginRight:'-70px'
                }}>
                    <h2 style={{
                        fontSize:'18px'
                    }}>Social Media</h2>
                    <ul  id="social" className='arrange'style={{
                        fontSize:'14px',
                        marginTop:'5px'
                    }}>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
               
            </div>
            <p style={{
               marginRight:'1030px',
                padding:'80px',
                color: '#BDBDBD',
                marginBottom:'-60px',
                fontSize:'12px',
                

            }}>Copyright @ 2022 Lugar Inc.</p>
        </div>
    );
}

export default Details;
