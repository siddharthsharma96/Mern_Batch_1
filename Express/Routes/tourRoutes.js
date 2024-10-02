const express = require('express');

const tourControllers = require('./../Controllers/tourController');
const authController = require('./../Controllers/authController');

const router = express.Router();

// router.param('id', tourControllers.checkValue);
// router.param('id', tourControllers.checkId);

router
  .route('/')
  .get(authController.protect, tourControllers.getAllTours)
  .post(tourControllers.createTour);
router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead'),
    tourControllers.deleteTour
  );

module.exports = router;
