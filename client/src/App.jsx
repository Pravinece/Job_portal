// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Home from './components/Home';
import JobListing from './components/JobListing';
import JobSearch from './components/JobSearch';
import JobApplication from './components/JobApplication';
import JobSeekerDashboard from './components/JobSeekerDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import Footer from './components/Footer';
import Form from './components/Form';
import Login from './components/Login';
const App = () => {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/verify-otp" element={<Login/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/apply" element={<JobApplication/>} /> 
          <Route path="/search" element={<JobSearch/>} />
          <Route path="/jobs" element={<JobListing/>} />
          <Route path="/jobseeker" element={<JobSeekerDashboard/>} />
          <Route path="/empdashboard" element={<EmployerDashboard/>} />
          <Route path="/form" element={<Form/>} />
          </Routes>
        </BrowserRouter>
  );
};

export default App;
