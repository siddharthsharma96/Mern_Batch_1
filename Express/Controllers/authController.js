const User = require('./../Model/userModel');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  const newUser = await User.create(req.body);
  const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_JWT, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  // 1. Check Email and password
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      status: 'fail',
      message: 'please provide email and password',
    });
    return;
  }

  //2. check user Exits or not and paswword is corect or not
  //   const user = User.findOne({ email }).select('+password');
  //   if (user) {
  //     res.status(400).json({
  //       status: 'fail',
  //       message: 'wrong email and password',
  //     });
  //     return;
  //   }

  // 3. if evrything is ok just send jwt token

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWZjZTg5MDFmZDhkOWNiY2MyNjMzYiIsImlhdCI6MTcyNjk5MjAxMCwiZXhwIjoxNzI3MTY0ODEwfQ.UaQwvxFHVDrxwy11hBydSNKru77Ehwi9LR7a6BQAsEM';
  res.status(200).json({
    status: 'ok',
    token,
  });
};
