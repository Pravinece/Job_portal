const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    linkedin: String,
    github: String,
    location: String,
    resume: String,
    applied_id:String,
});

const formModel = mongoose.model('FormData', formSchema);
module.exports = formModel;
