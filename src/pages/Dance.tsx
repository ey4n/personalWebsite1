import React from "react";
import "../App.css";
import { useMediaQuery } from '@react-hooks-library/core';
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';

const Dance: React.FC = () => {
  const isPageSmall = useMediaQuery('(max-width: 600px)');

  return (
    <div className={`tutor ${isPageSmall ? 'mobile-view' : ''}`}>
      {isPageSmall ? (
        <div className="mobile-background"></div>
      ) : (
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      <Link to="/otherStuff">
        <button className="back-button">Back</button>
      </Link>

      <div className="tutor1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', marginBottom: isPageSmall ? '50px' : '300px', marginTop: isPageSmall ? '50px' : '200px' }}>
        <div className="tutor2" style={{ display: 'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)', flexDirection: 'column', width: isPageSmall ? '300px' : '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding: '20px' }}>
          <h2 className='text'>Ballet</h2>
          <p className='text'>I have been taking ballet and passed the Royal Academy of Dance (RAD) examinations. Currently, I'm working towards the Advanced 1 level of the examinations.</p>
        </div>
        <div className="tutor2" style={{ display: 'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)', flexDirection: 'column', width: isPageSmall ? '300px' : '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding: '20px' }}>
          <h2 className='text'>Raffles Institution Street Dance</h2>
          <p className='text'>During the challenging years of the COVID-19 pandemic, my CCA teammates and I adapted to the circumstances by showcasing our talents through an online performance</p>
        </div>
        <div className="tutor2" style={{ display: 'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)', flexDirection: 'column', width: isPageSmall ? '300px' : '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding: '20px' }}>
          <h2 className='text'>Converge Recital</h2>
          <p className='text'>In 2021, I became a part of the Converge dance studio and took on the role of a dancer for their spectacular recital titled 'WINNER'.</p>
        </div>
      </div>
    </div>
  );
}

export default Dance;
