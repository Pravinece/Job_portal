// src/components/UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    setUserData({ ...userData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(userData);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={userData.name} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={userData.email} onChange={handleChange} /></label>
        <label>Resume: <input type="file" onChange={handleFileChange} /></label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
