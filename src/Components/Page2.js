import React, { useState, useEffect, useRef } from 'react';
import '../Css/Page2.css';
import left from '../Images/left bg.jpg';

const Page2 = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [previousProjects, setPreviousProjects] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);

  const limit = {
    previousProjects: 34,
    yearsExperience: 20,
    ongoingProjects: 12,
  };

  const page2Ref = useRef(null);

  const handleScroll = () => {
    if (!countersStarted && page2Ref.current) {
      const rect = page2Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.5) {
        setCountersStarted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (countersStarted) {
      const interval = setInterval(() => {
        setPreviousProjects((prev) => (prev < limit.previousProjects ? prev + 1 : limit.previousProjects));
        setYearsExperience((prev) => (prev < limit.yearsExperience ? prev + 1 : limit.yearsExperience));
        setOngoingProjects((prev) => (prev < limit.ongoingProjects ? prev + 1 : limit.ongoingProjects));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [countersStarted]);

  return (
    <div className="page2-container" ref={page2Ref}>
      <img src={left} alt="Second" className="left-image" />
      <div className="content">
        <h1 className='h1'>Award-winning real estate company in Dubai</h1>
        <p className='p'>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        <ul className='dates'>
          <li>PREVIOUS PROJECTS</li>
          <li>YEARS EXPERIENCE</li>
          <li>ONGOING PROJECTS</li>
        </ul>
        <ul className='year'>
          <li>{previousProjects}+</li>
          <li>{yearsExperience}y</li>
          <li>{ongoingProjects}</li>
        </ul>
      </div>
    </div>
  );
};

export default Page2;
