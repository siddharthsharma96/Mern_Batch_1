const express = require('express');

const tourControllers = require('./../Controllers/tourController');

const router = express.Router();

// router.param('id', tourControllers.checkValue);
// router.param('id', tourControllers.checkId);

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);
router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
