import React from "react";
import "../App.css";
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';
const Tutors: React.FC = () => {
    return (
        <div className="tutor">
        <Link to="/otherStuff">
        <button className="back-button">Back</button>
        </Link>
        <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="tutor1" style={{display:'flex', flexDirection: 'column', justifyContent:'center', gap:'50px',marginBottom:'300px', marginTop:'200px'}}>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px', width: '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2>Tutor with Nanyang Student Assistant Scheme</h2>
        <p>I dedicate a day every week to volunteer as a tutor, providing academic support to primary school students and serving as a mentor to help them excel in their studies</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2>Teacher at Canadian International School</h2>
        <p>I gained valuable experience working part-time as a co-curricular teacher, where I had the opportunity to introduce primary school students to the fundamental concepts of coding through engaging lessons using Scratch.</p>
        </div>
        <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px',  width: '500px',boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
        <h2>Tutor with Reach</h2>
        <p>I was part of Reach, a CCA within NTU's Renaissance Engineering Programme. As a team with fellow university students, we enthusiastically contributed to the 'Buddy Tutoring' program, where we provided valuable tuition and guidance to students.</p>
        </div>
        </div>
        </div>
    )
}

export default Tutors;