import React, { useState } from 'react';
import './Ongoing.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import card1 from './Card 1.jpg';
import card2 from './Card 2.jpg';
import card3 from './Card 3.jpg';
import card4 from './Card 4.jpg';

const Ongoing = () => {
    const images = [card1, card2, card3, card4];
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prevImage) => Math.min(prevImage + 1, images.length - 1));
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => Math.max(prevImage - 1, 0));
    };

    if (images.length === 0) {
        return (
            <div>
                <h1>No images available</h1>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h1>Ongoing projects</h1>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                
                <div className='sample' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Card${index + 1}`} />
                    ))}
                    <div className="icons">
                    <FaArrowLeft onClick={handlePrev} />
                    <FaArrowRight onClick={handleNext} />
                </div>
                </div>
               
            </div>
        </>
    );
}

export default Ongoing;
