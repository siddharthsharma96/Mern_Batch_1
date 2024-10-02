const User = require('./../Model/userModel');
const jwt = require('jsonwebtoken');
const util = require('util');

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
  const user = await User.findOne({ email }).select('+password');

  // const correct = await user.correctPassword(password, user.password);

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(400).json({
      status: 'fail',
      message: 'wrong email and password',
    });
    return;
  }

  // 3. if evrything is ok just send jwt token
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_JWT, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });
  console.log(token);

  res.status(200).json({
    status: 'ok',
    token,
  });
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    // 1 getting token and check whether its there or not
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    console.log(token);
    if (!token) {
      res.status(401).json({
        status: 'fail',
        message: 'You are not logged in',
      });
    }

    // 2validate token | verification of the topken
    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.TOKEN_JWT
    );
    console.log(decoded);
    // 3 check if user exits or not
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      res.status(401).json({
        status: 'fail',
        message: 'You are not user ',
      });
    }

    req.user = currentUser;

    next();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.restrictTo = (...roles) => {
  console.log(roles);

  return (req, res, next) => {
    console.log(roles, req.user.role);
    // roles=[admin,lead]
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        status: 'fail',
        message: 'You dont have rights to delete ',
      });
    }
    next();
  };
};
