const User = require('./../Model/userModel');
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
