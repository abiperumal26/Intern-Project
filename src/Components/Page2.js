import React from 'react';
import '../Css/Page2.css';
import left from '../Images/left bg.jpg';
const Page2 = () => {
    return (
        <div className="page2-container">
            <img src={left} alt="Second" className="left-image" />
            <div className="content">
                <h1>Award-winning real estate company in Dubai</h1>
                <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                <ul className='dates'>
                    <li>PREVIOUS PROJECTS</li>
                    <li>YEARS EXPERIENCE</li>
                    <li>ONGOING PROJECTS</li>
                </ul>
                <ul className='year'>
                    <li>34+</li>
                    <li>20</li>
                    <li>12</li>
                </ul>
            </div>
        </div>
    );
}

export default Page2;
