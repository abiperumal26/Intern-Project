import React from 'react';
import './Testimonals.css';
import Rectangle from './Rectangle 6.jpg';

const Testimonals = () => {
    return (
        <>
            <h1>Few smiles and comments</h1>
            <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <img src={Rectangle} alt="Reactangle6" />
            <div className='head'>
                <h2>Dream house isn’t a dream anymore</h2>
                <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                <h4>Brooklyn Simmons</h4>
                <p className='para'>Artist</p>
            </div>
        </>
    );
}

export default Testimonals;

