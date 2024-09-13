const express = require('express');

const usersController = require('./../Controllers/usersController');

const router = express.Router();

router.route('/').get(usersController.getUser).post(usersController.createUser);
router
  .route('/:id')
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
