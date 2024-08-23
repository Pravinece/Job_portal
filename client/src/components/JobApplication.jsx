import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';  
import { useState } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import './JobApplication.css';

const JobApplication = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const id = location.state.from;
  const [jobs, setJobs] = useState({
    role: '',
    location: '',
    company: '',
    description: [],
  });
  const [req,setReq]=useState(["Working knowledge of messaging systems, Mailing and Telephonic conversation",
"Excellent problem-solving and analytical skills.",
"Good Understanding and communication skills.",
"Knowledge of one or more familiar languages like Java, SQL"
  ]);
  useEffect(()=>{
    axios.post('http://localhost:8000/apply',{id})
      .then(res =>{
        console.log(res);
        setJobs(res.data);
      })
      .catch((err)=>console.log(err));
      },[id]
  );

  const  HandleApplyJob=(props)=>{
    navigate('/form', { state: { from: props._id } });
  }


  return (
    <div>
      <p>Let's Begin your Career .</p>
      <div className='upper'>
          <h2>{jobs.role}</h2>
          <h3>Location: {jobs.location}</h3>
          <button onClick={()=>HandleApplyJob(jobs)}>Apply Now</button>
        </div>

        <div className='lower'>
          <b>Introduction</b>
           <p>At {jobs.company}, work is more than a job  it's a calling: To build. To design. To code. 
            To consult. To think along with clients and sell. To make markets. To invent.
             To collaborate. Not just to do something better, but to attempt things you've never thought possible.
              Are you ready to lead in this new era of technology and solve some of the world's
             most challenging problems? If so, lets talk.</p>

          <b>Job Description</b>
          <ul>
          {jobs.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <b>Required Skills</b>
        <ul>
          {req.map((requires, index) => (
            <li key={index}>{requires}</li>
          ))}
        </ul>

      <b>Job Details</b>
      <p><b>Role </b> {jobs.role}</p>
      <p><b>Location </b> {jobs.location}</p>
      <p><b>Salary </b> {jobs.salary}</p>
      <p><b>Employment-Type </b> {jobs.mode}</p>
      <p><b>Company </b>{jobs.company}</p>
      <p><b>Passed out </b>{jobs.YOP}</p>
        </div>
    </div>
  );
};

export default JobApplication;
