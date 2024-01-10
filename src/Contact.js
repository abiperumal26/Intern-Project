// Contact.js
import React from 'react';
import './Contact.css';
import contact from './contact.jpg';

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <img src={contact} alt="Reactangle6" className='contact-image' />
                <div className='heading'>
                    <h2>Contact Us</h2>
                    <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    <div className='sampl'>
                        <div className='input'>
                            <div className='input-group'>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='input1'>
                            <div className='input-group'>
                                <input type="email" placeholder='Email Address' />
                                <input type="tel" placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className='input2'>
                            <div className='input-group'>
                                <textarea placeholder='Description' className='full-width' />
                            </div>
                            <div className="button">
                                <button className='ran'>Get a Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
