import React from "react";
import "../App.css";
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@react-hooks-library/core';

const Outdoor: React.FC = () => {
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
          <h2 className='text'>Adventure Trail Challenge 2022</h2>
          <p className='text'>I had the honor of serving as the liaison officer for ATC'22, an exciting and inclusive Amazing Race event organized by NTU that welcomed members of the public to participate</p>
        </div>
        <div className="tutor2" style={{ display: 'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)', flexDirection: 'column', width: isPageSmall ? '300px' : '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding: '20px' }}>
          <h2 className='text'>Adventure Trail Challenge 2023</h2>
          <p className='text'>This year, I have taken on a different role in the planning and execution of our upcoming event, ATC'23, with a primary focus on leading the marketing efforts.</p>
        </div>
        <div className="tutor2" style={{ display: 'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)', flexDirection: 'column', width: isPageSmall ? '300px' : '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding: '20px' }}>
          <h2 className='text'>Clementi Forest Hike</h2>
          <p className='text'>In collaboration with the NTU Alumni Club, I had the privilege of leading and guiding participants on a memorable hike through Clementi Forest.</p>
        </div>
      </div>
    </div>
  );
}

export default Outdoor;
