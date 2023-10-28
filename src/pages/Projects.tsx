import React from "react";
import "../App.css";
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';
const Projects: React.FC = () => {
    return (
        <div className="projects">
        <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
         <div className="tutor1" style={{display:'flex', flexDirection: 'column', justifyContent:'center', gap:'50px',marginBottom:'300px', marginTop:'200px'}}>
         <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px', width: '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
         <h2 className='text'>Personal Website</h2>
         <p className='text'>I had a blast exploring the world of front-end development through this personal project. I familiarised myself with tools such as React and TypeScript to aid my development of this website</p>
         <Link className='button'
        to="https://github.com/ey4n/personalWebsite1"
        style={{ backgroundColor: '#def4fa', fontFamily: 'serif', display: 'block', padding: '10px', borderRadius: '10px' }}
      >
        Click here for the code!
      </Link>
         </div>
         <div className="tutor2" style={{display:'flex', backgroundColor: 'rgba(245, 245, 245, 0.7)',flexDirection:'column', height: '200px', width: '500px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', padding:'30px'}}>
         <h2 className='text'>HacX, organized by HTX and Microsoft</h2>
         <p className='text'>Through this, I got to explore the use of MATLAB tools to use Eulerian magnification to monitor ones vital signs through video inputs</p>
         <Link className='button'
        to="https://drive.google.com/drive/folders/11e-oCmVLV5ExiXx5Vh7_PSki5JqRH55e?usp=drive_link"
        style={{ backgroundColor: '#def4fa', fontFamily: 'serif', display: 'block', padding: '10px', borderRadius: '10px' }}
      >
        Click here for the videos!
      </Link>
         </div>
         </div>
         </div>
    )
    }
export default Projects