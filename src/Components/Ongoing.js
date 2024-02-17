import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import '../Css/Ongoing.css';
import card1 from '../Images/left1.jpg';
import card2 from '../Images/left2.png';
import card3 from '../Images/left3.png';
import card4 from '../Images/left4.png';

const Ongoing = () => {
  const images = [card1, card2, card3, card4];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    const nextImageIndex = (currentImage + 1) % images.length;
    setCurrentImage(nextImageIndex);
  };

  const handlePrev = () => {
    const prevImageIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevImageIndex);
  };

  if (images.length === 0) {
    return (
      <div>
        <h1>No images available</h1>
      </div>
    );
  }

  const store = [
    { id: 1, name: 'Ramasamy Villa', Address: '1901 Thornridge Cir. Shiloh 81063' },
    { id: 2, name: 'Lakshmi Villa', Address: '2715 Thornridge San Jose, Dubai' },
    { id: 3, name: 'Abinaya Villa', Address: ' 246 Royal Thornridg.Mesa, 45463' },
    { id: 4, name: 'Abi Villa', Address: '271 Thornridge. San Jose, Dubai' },
  ];

  return (
    <div className="contains">
      <h1 style={{fontSize:'48px',marginLeft:'1px'}}>Ongoing projects</h1>
      <p className='see'style={{fontSize:'18px'}}>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      <div className="Log" >
        <FaArrowLeft onClick={handlePrev} className="log1" size="80px"style={{
          marginLeft:'-40px',
          fontWeight:'normal',     
          marginTop:'-10px'    
        }} />
        <FaArrowRight onClick={handleNext} className="log2" size="80px" style={{marginTop:'-10px'}}/>
      </div>
      <div className="Ongo" style={{
       
      }}>
        <div className="image-slider" style={{ transform: `translateX(-${currentImage * 100}%)`,
}}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Card${index + 1}`} />
              <div className="over"style={{

              }}>
                <p key={store[index].id} style={{ margin: '5px',marginTop:'40px' }}>
                  <p className='ram' style={{   color:'#1E3240' ,
                fontFamily: 'Mulish',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '17px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#1E3240',
                width:'200px'
                
                 }}>{store[index].name}
                    <br />
                    <IoLocationOutline  style={{
                  marginLeft:'-150px',
                  fontFamily: 'Mulish',
                  fontSize: '10px',
                  fontWeight: '400',
                  lineHeight: '12px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  marginTop:'3px',
                  color: '#1E3240',
                 
                  }}/>
                    <p style={{
                      fontSize:'10px',
                      marginTop:'-16px',
                      marginLeft:'6px',
                      color:'#1E3240' 

                    }}>{store[index].Address}</p>
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
