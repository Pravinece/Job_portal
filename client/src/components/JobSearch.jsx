// src/components/JobSearch.js
import axios from 'axios';
import React, { useState } from 'react';
import d from '../image/img7.jpg';
import './Joblist.css';
import { Link, useNavigate } from 'react-router-dom';

const JobSearch = () => {
  const navigate=useNavigate();
  const [role, setRole] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(role!=''){
      axios.post('http://localhost:8000/search', { role })
      .then(res => {
          setJobs(res.data);
          console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }
  };
  const  HandlePass=(props)=>{
    navigate('/apply', { state: { from: props._id } });
  }
  return (
    <div className="job-search-container">
    <div className="search-g-img">
      <img src={d} width={1400} height={320} alt="Search Background" />
      <form onSubmit={handleSubmit} className="search-bar">
        <label>Keyword: <input type="text" name="keyword" value={''|| role} onChange={(e) => setRole(e.target.value)} /></label>
        <button type="submit">Search</button>
      </form>
    </div>

        <div className='list'>
        {jobs.map((job, index) => (
        <div className='joblistbox' key={index}>
          <h3>{job.role}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <button className='searchbtn' onClick={() => HandlePass(job)}>Apply Now</button>
        </div>
      ))}
        </div>
    </div>
  );
};

export default JobSearch;