const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// name, email,password,confirmpassword,image
const userSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ['admin', 'user', 'lead', 'guide'],
    default: 'user',
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
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordconfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  console.log(resetToken, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
