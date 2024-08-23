const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");
const jobModel = require('./models/job_list');
const formModel = require('./models/formdata');
const JobModel = require("./models/job_list");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const SMTPConnection = require("nodemailer/lib/smtp-connection");





const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Job_List')
  .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));


app.get('/jobs', async(req, res) => {
    try {
      const data = await jobModel.find({});
      if (data.length == 0) {
        res.json("not exist");
      } else {
        res.json(data);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching job listings.' });
    }
  });

  app.get('/jobs_applied', async (req, res) => {
    try {
      const data = await JobModel.find({ applied: true });
      res.json(data);
    } catch (err) {
      console.error("not exist");
      res.status(500).json({ error: 'An error occurred while searching for job listings.' });
    }
  });


app.post('/search', async (req, res) => {
    const { role } = req.body;
    try {
      const data = await jobModel.find({
        role: { $regex: role, $options: 'i' }
      });
      res.json(data);
    } catch (err) {
      console.error("not exist");
      res.status(500).json({ error: 'An error occurred while searching for job listings.' });
    }
  });


  app.post('/apply',async(req,res)=>{
    const {id}=req.body;
    try{
      const data= await jobModel.findById(id);
      res.json(data);
  }catch(err){
    console.log(err);
  }
});

app.put('/add_status',async(req,res)=>{
  try{
    const { id } = req.body; 
    console.log(id)
    const data= await jobModel.updateOne( { _id: id },{ $set: { applied: true } });
    res.json(data);
}catch(err){
  console.log(err);
}
})


// ========================form====================================

app.post('/form',async (req,res)=>{
  formModel.create(req.body.formData)
  .then((data)=>{res.json(data)})
})







// =============================otp==============================

const otps={};

// Configure Nodemailer

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com', // Correct host
  port: 587, // Correct port for TLS
  secure: false, // Use TLS
  auth: {
    user: 'pravinece2020@gmail.com', // Replace with your email or use environment variables
    pass: 'Pravin@25062002', // Replace with your password or use environment variables
  },
});

// Endpoint to send OTP
app.post('/login', (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  otps[email] = otp;

  const mailOptions = {
    // from: process.env.EMAIL_USER,
    from: 'pravinece2020@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP:', error);  // More detailed error logging
      return res.json({ success: false, message: 'Error sending OTP' });
    }
    res.json({ success: true });
  });
});

// Endpoint to verify OTP 
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otps[email] == otp) {
    // delete otps[email];
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});