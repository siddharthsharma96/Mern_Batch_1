const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This name is required'],
    trim: true,
    unique: [true, 'You must have a uniue name'],
    minlength: [10, 'You must have 5 char name'],
  },
  duration: {
    type: Number,
    required: [true, 'Must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Must have a Size'],
  },
  difficulty: {
    type: String,
    required: [true, 'Must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1'],
    max: [5, 'Rating should not be below 5'],
  },
  ratingsQuantity: Number,
  price: {
    type: Number,
    required: [true, 'A tour should have a price'],
  },
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
