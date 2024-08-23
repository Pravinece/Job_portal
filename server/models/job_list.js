const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    role: String,
    location: String,
    company: String,
    mode: String,
    YOP: String,
    salary: String,
    description: Array,
    applied:Boolean
});

const JobModel = mongoose.model('Job_List', JobSchema); // Use 'Job_List' to match your collection name
module.exports = JobModel;
