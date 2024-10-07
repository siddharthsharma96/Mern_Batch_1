const User = require('./../Model/userModel');
const jwt = require('jsonwebtoken');
const util = require('util');
const sendEmail = require('../utils/mail');
const crypto = require('crypto');

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

exports.forgotPassword = async (req, res, next) => {
  try {
    // 1 get user based on email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        status: 'Fail',
        message: 'No user with this email',
      });
    }
    console.log('user found', user);
    // 2. Generate random reset token
    const resetToken = user.createResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // 3. send to users mail

    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/resetPassword/${resetToken}`;
    const message = `Change the password with this url : ${resetUrl} `;

    await sendEmail({
      email: user.email,
      subject: 'Passowrd Reset',
      message,
    });

    res.status({
      status: 'Success',
      message: 'Email sent , Please check your mail',
    });
  } catch (err) {
    // in case of an error , password reset
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(500).json({
      status: 'fail',
      message: 'There was an error in sending the mail , please try again',
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    console.log(req.params.token);

    // 1. get user based on the token
    console.log(req.params.token);

    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    // 2. if token has not expired , & the user has not set the passord

    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid token , Token has expired',
      });
    }
    user.password = req.body.password;
    user.passwordconfirm = req.body.passwordconfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    // 3. Update passwordchanged at property for user
    // 4. log the user and send the jwt token

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_JWT, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });

    console.log(token);

    res.status(200).json({
      status: 'Success',
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
