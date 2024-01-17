import React from 'react';
import '../Css/Testimonals.css'; 
import Rectangle from '../Images/Rectangle 6.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Testimonials = () => {
    return (
        <div className='test'>
            <div className='sam'>
                <h1>Few smiles and comments</h1>
                <p className='sami'>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                <div className='title'>
                
                    <div className='random'>
                   
                        <img src={Rectangle} alt="Rectangle6" />
                    </div>
                </div>
                <div className='head'>
                    <h2 >Dream house isn't a dream anymore</h2>
                    <p className='dream'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.</p>
                    <h4>Brooklyn Simmons</h4>
                    <p >Artist</p>
                  
                </div>
                <div className='arrow'>
                <FaArrowLeft className='logo1' size="58px" />
                   
                </div>
                <div className='arrow2'>
                <FaArrowRight  className='logo2'size="58px"/>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
