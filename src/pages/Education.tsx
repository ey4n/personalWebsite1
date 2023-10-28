import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; 
import "react-vertical-timeline-component/style.min.css";
import "../App.css";
import backgroundVideo from '../images/background.mp4'

const Education: React.FC = () => {
  return (
    <div className="experience">
      <div className="mobile-background">
      <video className="background-video" autoPlay loop muted>
    <source src={backgroundVideo} type="video/mp4" />
    </video>
      <div style={{backgroundColor: 'rgba(245, 245, 245, 0.7)',left:'0',right:'0'}}>
      <VerticalTimeline lineColor="#fcc9e7" >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#FEA3C2" }}
        >
          <div className="timeline-content">
            <h3 style={{fontFamily:'serif', color:'#525453'}}className="vertical-timeline-element-title">
              Nanyang Technological University: Renaissance Engineering Programme
            </h3>
            <h4 style={{fontFamily:'serif',color:'#525453'}}>2022 - Present</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{fontFamily:'serif',color:'#525453'}}>
              Year 2 Student   
            </h4>
            <p style={{fontFamily:'serif',color:'#525453'}}>B.Eng.Sc(Computer Engineering) & MSc (Technology Management)</p>
          </div>

        </VerticalTimelineElement>  
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#FFD4E3", color: "#fff" }}
        >
          <div className="timeline-content">
            <h3 className="vertical-timeline-element-title" style={{fontFamily:'serif',color:'#525453'}}>
              Raffles Instutuition 
            </h3>
            <h4 style={{fontFamily:'serif',color:'#525453'}}>2020 - 2021</h4>
            <p style={{fontFamily:'serif', color:'#525453'}}>H2 subjects: Math, Economics, Physics, Chemistry</p>
            <p style={{fontFamily:'serif',color:'#525453'}}>Achieved 90RP for A Levels</p>
            <p style={{fontFamily:'serif',color:'#525453'}}>Raffles Street Dance</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#FFE7EF", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title" style={{fontFamily:'serif',color:'#525453'}}>
            Raffles Girls School
          </h3>
          <h4 style={{fontFamily:'serif',color:'#525453'}}>2016 - 2019</h4>
          <p style={{fontFamily:'serif',color:'#525453'}}>
            Subjects: Physics, Maths, Chemistry, Biology, History, English, Chinese
          </p>
          <p style={{fontFamily:'serif',color:'#525453'}}>Raffles Girls Dance International</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
    </div>
  );
}

export default Education;