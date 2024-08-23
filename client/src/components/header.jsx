// src/components/Header.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const  HandlePass=(props)=>{
    navigate('/jobs', { state: { from: 'applied' } });
  }
  return (
    <header className="header">
      <div className="company-name">JobFinder</div>
      <nav className="nav-options">
        <a onClick={() => HandlePass()}>Applied Jobs</a>
        <a href="/search">Job Search</a>
        <a href="/footer">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
