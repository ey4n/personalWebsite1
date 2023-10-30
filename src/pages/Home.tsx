import React from "react";
import {useMediaQuery} from '@react-hooks-library/core';
import "../App.css";
import myFace from '../images/myFace.jpeg';
import { Link } from 'react-router-dom';
import backgroundVideo from '../images/background.mp4'
const Home: React.FC = () => {
  const isPageSmall = useMediaQuery('(max-width: 600px)');
  
  return (
    <div className="home">
      {isPageSmall ? (
        <div className="mobile-background"></div>
      ) : (
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div style={{position: 'relative',zIndex: '1'}}>
      <h1 style={{fontFamily:'serif',color:'#525453'}}>Hi! Welcome to my website</h1>
      <div style={{display:'flex', alignItems:'center', width: '600px', justifyContent: 'space-between', gap: '30px'}}>
        <img src={myFace} alt="My Face" width={200} height={250} style={{borderRadius:'100px'}}/>
        <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p style={{backgroundColor: '#def4fa',padding:'30px',borderRadius:'10px',fontFamily:'serif',color:'#525453'}}>
          Hi, I'm Eyan, a Computer Engineering student under Nanyang Technological University's flagship Renaissance Engineering Programme.
        </p>
        <Link className='button'
        to="https://www.linkedin.com/in/eyan-chua"
        style={{ backgroundColor: '#def4fa', fontFamily: 'serif', display: 'block', padding: '10px', borderRadius: '10px' }}
      >
        Click here to connect!
      </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
