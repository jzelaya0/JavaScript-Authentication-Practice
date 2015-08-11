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

//Ecrypting user password method
userSchema.pre('save', function(next) {
  var user = this;

  //Hash the password only if the password has been changed or is new
  if(!user.isModified('password')) return next();

  //Generate salt
  bcrypt.genSalt(5, function (err,salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function (err,hash) {
      if(err) return next(err);

      //change the password to the hased version
      user.password = hash;
      next();
    });
  });
});

//Create user model out of userSchema (constructor function)
var User = mongoose.model('User',userSchema);

//Export the model for use within app
module.exports = User;
