import React from 'react';
import './Testimonals.css'; 
import Rectangle from './Rectangle 6.jpg';

const Testimonials = () => {
    return (
        <div className='test'>
        <div className='sam'>
            <h1>Few smiles and comments</h1>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <div className='title'>
                
                <div className='random'>
                    <img src={Rectangle} alt="Reactangle6" />
                </div>
            </div>
            <div className='head'>
                <h2>Dream house isn't a dream anymore</h2>
                <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                <h4>Brooklyn Simmons</h4>
                <p className='para'>Artist</p>
            </div>
        </div>
        </div>
    );
}

export default Testimonials;
