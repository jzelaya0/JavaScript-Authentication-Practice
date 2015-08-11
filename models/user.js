//USER MODEL
//IMPORT mongoose and bcrypt
var mongoose = require('mongoose');
var bcrypt =   require('bcrypt');

//Create user schema
var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, select: false},
  passHint: [{question: String, answer: String}]
});

//Create user model out of userSchema (constructor function)
var User = mongoose.model('User',userSchema);

//Export the model for use within app
module.exports = User;
