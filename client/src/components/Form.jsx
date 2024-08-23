import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import './Form.css';

export default function Form() {
  const navigate=useNavigate();
  const location = useLocation();
  const { from } = location.state || {}
  console.log(from)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    linkedin: "",
    github: "",
    location: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
      formData.applied_id = from
        axios.post('http://localhost:8000/form',{formData})
        .then(res=>{
            if(res.data.applied_id){
            console.log(res.data.applied_id)
              axios.put('http://localhost:8000/add_status',{id:res.data.applied_id})
      .then(res =>{
        console.log(res);
        setJobs(res.data);
      })
      .catch((err)=>console.log(err));
            }
        })
      navigate('/')
    console.log(formData);
  };

  return (
    <>
    <div className="form">
      <h1 className="title">Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="field"> 
          <label htmlFor="name" className="label">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field"> 
          <label htmlFor="email" className="label">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="tel" className="label">Phone Number</label>
          <input
            type="tel"
            id="tel"
            placeholder="Enter Phone Number"
            value={formData.tel}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="linkedin" className="label">LinkedIn Link</label>
          <input
            type="text"
            id="linkedin"
            placeholder="Enter LinkedIn Link"
            value={formData.linkedin}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="github" className="label">Github Link</label>
          <input
            type="text"
            id="github"
            placeholder="Enter Github Link"
            value={formData.github}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="location" className="label">Current Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Current Location"
            value={formData.location}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            // onChange={handleFileChange}
          />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
}
