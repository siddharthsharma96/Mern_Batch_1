const express = require('express');
const authController = require('./../Controllers/authController');

const usersController = require('./../Controllers/usersController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotpassword', authController.forgotPassword);
router.post('/resetpassword/:token', authController.resetPassword);

router.route('/').get(usersController.getUser).post(usersController.createUser);
router
  .route('/:id')
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
