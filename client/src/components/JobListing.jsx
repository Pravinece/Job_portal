import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Joblist.css'; 
import d from '../image/img6.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import JobApplication from './JobApplication';
import { Navigate } from 'react-router-dom';

const JobListing = (props) => {
  const [jobs, setJobs] = useState([]);
  const navigate=useNavigate();
  const location = useLocation();
  const type = location.state.from;
  console.log(type)
  useEffect(() => {
    console.log(type)
   if(type == 'all'){
    axios.get('http://localhost:8000/jobs')
    .then(response => {
      setJobs(response.data);
      console.log(response.data);  
    })
      .catch(err => {
        console.log(err);
      });
   }
   else{
    axios.get('http://localhost:8000/jobs_applied')
    .then(response => {
      setJobs(response.data);
      console.log(response.data);  
    })
      .catch(err => {
        console.log(err);
      });
   }
  }, []);

 const  HandlePass=(props)=>{
  navigate('/apply', { state: { from: props._id } });
}

  return (
    <div>
      <h2>Job Listings</h2>
      <div className='joblist-intro'>
      <img src={d} width={500} height={350}></img>
      <p>Reach a wide audience of qualified candidates by posting your job openings on JobFinder. 
        Our platform makes it easy to create and manage job listings.
        Utilize our advanced candidate search and screening tools to find the best fit for your company.
         Filter applicants based on skills, experience, and qualifications.
      </p>
</div>
      <div className='list'>
              {jobs.map((job, index) => (
        <div className='joblistbox' key={index}>
          <h3>{job.role}</h3>
          <p>Location: {job.location}</p>
          <p>Company: {job.company}</p>
          {/* <Link to={{ pathname: "/apply", state: { from: "occupation" } }} className='searchbtn'>
  Apply Now
</Link> */}
{/* <button className='searchbtn' onClick={()=>HandlePass(job)}>Apply Now</button> */}
{job?.applied ? (
        <p>Application Submitted</p>
      ) : (
        <button className='searchbtn' onClick={() => HandlePass(job)}>Apply Now</button>
      )}

        </div>
      ))}
    </div>
    </div>
  );
};

export default JobListing;
