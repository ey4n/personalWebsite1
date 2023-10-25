import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import NavigationBar from './components/Navbar';
import Others from './pages/Others';
import Tutors from './pages/Tutor';
import Dance from './pages/Dance'
import Outdoor from './pages/Outdoor';
import Projects from './pages/Projects';


const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar/>
        <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/education" element = {<Education/>}/>
        <Route path="/otherStuff" element = {<Others/>}/>
        <Route path ="/tutor" element={<Tutors/>}/>
        <Route path ="/dance" element={<Dance/>}/>
        <Route path ="/outdoor" element={<Outdoor/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        </Routes>
    </Router>
  );
};

export default App;
