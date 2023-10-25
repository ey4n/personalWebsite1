import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#f2f2f2', padding: '30px',zIndex:'2'}}>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: 0, padding: 0}}>
        <li style={{ margin: '0 20px' }}>
          <Link to="/" style ={{fontFamily: 'serif', color: '#1550B0'}}>Home</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/education" style ={{fontFamily: 'serif', color: '#1550B0'}}>Education</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/projects" style ={{fontFamily: 'serif', color: '#1550B0'}}>Projects</Link>
        </li>
        <li style={{ margin: '0 20px' }}>
          <Link to="/otherStuff" style ={{fontFamily: 'serif', color: '#1550B0'}}>Other stuff!</Link>
        </li>
      </ul>
    </nav>

  );
};

export default NavigationBar;
