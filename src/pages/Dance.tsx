import React from "react";
import "../App.css";
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';
const Dance: React.FC = () => {
    return (
        <div className="tutor">
        <div className="mobile-background">
        <Link to="/otherStuff">
        <button className="back-button">Back</button>
        </Link>
        <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="tutor1" style={{display:'flex', flexDirection: 'column', justifyContent:'center', gap:'50px',marginBottom:'300px', marginTop:'200px'}}>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px', width: '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Ballet</h2>
        <p className='text'>I have been taking ballet and passed the Royal Academy of Dance (RAD) examinations. Currently, I'm working towards the Advanced 1 level of the examinations.</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Raffles Instituition Street Dance</h2>
        <p className='text'>During the challenging years of the COVID-19 pandemic, my CCA teammates and I adapted to the circumstances by showcasing our talents through an online performance</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Converge Recital</h2>
        <p className='text'>In 2021, I became a part of the Converge dance studio and took on the role of a dancer for their spectacular recital titled 'WINNER'.</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Dance;