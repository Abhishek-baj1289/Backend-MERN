const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    vid:{
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "employee"
    },
    password:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User',userSchema);