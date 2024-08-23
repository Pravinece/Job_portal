import React from 'react';
import './Home.css';
import a from '../image/img1.jpg';
import b from '../image/img2.jpg';
import c from '../image/img3.jpg';
import d from '../image/img4.jpg';
import e from '../image/img5.webp';
import Header from './header';
import { Link, useNavigate } from "react-router-dom";
import JobListing from './JobListing';
import Footer from './Footer';
const Home = () => {
  const navigate=useNavigate();
  const  HandlePass=(props)=>{
    navigate('/jobs', { state: { from: 'all' } });
  }
  return (
    <>
    <Header/>
      <div className="home-container">
        <div className="image-container">
          <img src={a} width={750} alt="Career Opportunity" />
        </div>
        <div className="text-container">
          <h2>Discover Your Next Career Opportunity</h2>
          <p>
            JobFinder is your go-to platform for finding the perfect job that matches your
            skills, interests, and career goals. Whether you're a job seeker looking for
            your next challenge or an employer searching for the right talent, JobFinder
            offers a seamless and efficient way to connect.
          </p>
          <button  className='Listbtn' onClick={() => HandlePass()}> List the Job </button>
        </div>
      </div>




      <div className="content-container">
        <div className="content-item">
          <img src={b} width={700}  height={400}alt="Advanced Search Tools" />
          <h6>
            Use our advanced search tools to find job listings that match your criteria.
            Filter by location, industry, experience level, and more to narrow down your options.
            Our platform uses sophisticated algorithms to suggest jobs that align with your profile and preferences.
          </h6>
        </div>
        <div className="content-item">
          <h6>
            Apply for jobs with just a few clicks. Our user-friendly application process 
            allows you to submit your resume and cover letter directly through the platform.
            Access a wealth of resources to help you on your job search journey. From resume tips to interview preparation guides, 
            we provide the tools you need to succeed.
          </h6>
          <img src={c} width={700}  height={400}alt="Job Application Process" />
        </div>
      </div>



      <div className='lastimg'>
        <div><img src={e} width={1300} height={300} alt="d" /></div>
      </div>

      <Footer/>

    </>
  );
};

export default Home;
