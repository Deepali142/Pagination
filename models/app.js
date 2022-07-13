const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    username:{
        type:'string',
        required:true,
    },
    password:{
        type:'string',
        required:true,
    }
});

const user = new mongoose.model('user',Schema);

module.exports = user;
