import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tutor from '../images/tutor.jpg';
import dance from '../images/dance.jpg';
import odac from '../images/odac.jpg';
import '../App.css'
import backgroundVideo from '../images/background.mp4'
import { Link } from 'react-router-dom';


const Others: React.FC = () => {
  return (
    <div className='others'>
    <video className="background-video" autoPlay loop muted>
    <source src={backgroundVideo} type="video/mp4" />
    </video>
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-around', width:'2000px', gap: '50px', alignSelf:'center',marginLeft:'70px'}}>
    <Card className='card' style={{ width: '18rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', backgroundColor: 'rgba(245, 245, 245, 0.7)'}}>
      <Card.Img variant="top" src={tutor} style={{width:200, boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'}} />
      <Card.Body>
        <Card.Title className='text'>Tutoring</Card.Title>
        <Card.Text className='text'>
          I really like interacting with children! I find great joy in connecting with children through tutoring, helping them learn and grow.
        </Card.Text>
        <Link to="/tutor">
        <Button style={{fontFamily: 'serif'}} variant="primary">More about this</Button>
        </Link>
      </Card.Body>
    </Card>
    <Card className='card'style={{ width: '18rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', backgroundColor: 'rgba(245, 245, 245, 0.7)'}}>
      <Card.Img variant="top" src={dance} style={{width:200, boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'}} />
      <Card.Body>
        <Card.Title className='text'>Dancing</Card.Title>
        <Card.Text className='text'>
          Dance has been a big part of my life since I was 4, and is something that I will always enjoy! I'm grateful that I am able to continue pursuing this passion of mine.
        </Card.Text>
        <Link to="/dance">
        <Button variant="primary" style={{fontFamily: 'serif'}}>More about this</Button>
        </Link>
      </Card.Body>
    </Card>
    <Card className='card'style={{ width: '18rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', backgroundColor: 'rgba(245, 245, 245, 0.7)', marginBottom:'30'}}>
      <Card.Img variant="top" src={odac} style={{width:200, height:130,boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'}} />
      <Card.Body>
        <Card.Title className='text'>Outdoor Adventure Club</Card.Title>
        <Card.Text className='text'>
        I enjoy being outdoors, and I'm thrilled to be leading NTU's Outdoor Adventure Club: ATC's marketing efforts, where I can share this love with others.
        </Card.Text>
        <Link to="/outdoor">
        <Button variant="primary" style={{fontFamily: 'serif'}}>More about this</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </div>

  );
}

export default Others;