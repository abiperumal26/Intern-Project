import React, { useState } from 'react';
import '../Css/Testimonals.css'; 
import Rectangle1 from '../Images/Rectangle 6.jpg'; // Fix: Corrected image path
import Rectangle2 from '../Images/buil.jpg';
import Rectangle3 from '../Images/building.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialData = [
  {
    image: Rectangle1,
    title: "Dream house isn't a dream anymore",
    content: "Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.",
    author: "Brooklyn Simmons",
    occupation: "Artist",
  },
  {
    image: Rectangle2,
    title: "Architectural  Rising Elegance",
    content: "Witness structure gracefully ascending,Where elegance meets architectural brilliance.A harmonious dance of design,In every detail, a story.",
    author: "Abinaya SendrayaPerumal",
    occupation: "Engineer",
  },
  {
    image: Rectangle3,
    title: "Modern Eco-Friendly Living ",
    content: "Discover a revolutionary living experience where eco-friendly practices blend seamlessly with cutting-edge design, creating a sustainable oasis for mindful living.",
    author: "Sendraya Perumal",
    occupation: "Engineer",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  
  const { image, title, content, author, occupation } = testimonialData[currentIndex];

  return (
    <div className='test'>
      <div className='sam'>
        <h1>Few smiles and comments</h1>
        <p className='sami'>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        <div className='title'>
          <div className='random'>
            <img src={image} alt={title} />
          </div>
        </div>
        <div className='head'>
          <h2>{title}</h2>
          <p className='dream'>{content}</p>
          <h4>{author}</h4>
          <p>{occupation}</p>
        </div>
        <div className='arrow' onClick={handlePrev}>
          <FaArrowLeft className='logo1' size="58px" />
        </div>
        <div className='arrow2' onClick={handleNext}>
          <FaArrowRight className='logo2' size="58px" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
