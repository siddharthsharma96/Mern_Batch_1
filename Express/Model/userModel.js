const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// name, email,password,confirmpassword,image
const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    minlength: [3, 'must have a 3 digit length'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is mandatory'],
    lowercase: true,
    validate: [validator.isEmail, 'Enter Correct Email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Must have a password'],
    minlength: 8,
    select: false,
  },
  passwordconfirm: {
    type: String,
    required: [true, 'You have to confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Enter correct password',
    },
  },
});

userschema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordconfirm = undefined;
  next();
});
userschema.methods.correctPassword = async function (
  cadidatepassword,
  userPassword
) {
  return await bcrypt.compare(cadidatepassword, userPassword);
};

const User = mongoose.model('User', userschema);

module.exports = User;
