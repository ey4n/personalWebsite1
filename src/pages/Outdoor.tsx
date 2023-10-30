import React from "react";
import "../App.css";
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';
const Outdoor: React.FC = () => {
    return (
        <div className="tutor">
        <div className="mobile-background">
        </div>
        <Link to="/otherStuff">
        <button className="back-button">Back</button>
        </Link>
        <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="tutor1" style={{display:'flex', flexDirection: 'column', justifyContent:'center', gap:'50px',marginBottom:'300px', marginTop:'200px'}}>
        <div className="tutor2" style={{display:'flex',backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px', width: '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Adventure Trail Challenge 2022</h2>
        <p className='text'>I had the honor of serving as the liaison officer for ATC'22, an exciting and inclusive Amazing Race event organized by NTU that welcomed members of the public to participate</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Adventure Trail Challenge 2023</h2>
        <p className='text'>This year, I have taken on a different role in the planning and execution of our upcoming event, ATC'23, with a primary focus on leading the marketing efforts.</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2 className='text'>Clementi Forest Hike</h2>
        <p className='text'>In collaboration with the NTU Alumni Club, I had the privilege of leading and guiding participants on a memorable hike through Clementi Forest.</p>
        </div>
        </div>
        </div>
    )
}

export default Outdoor;