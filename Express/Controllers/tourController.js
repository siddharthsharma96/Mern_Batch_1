// const fs = require('fs');
const Tour = require('./../Model/tourModel');
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
// );

// exports.checkValue = (req, res, next) => {
//   if (req.params.id === '2') {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Id 2 is unavailable right now',
//     });
//   }
//   next();
// };

// exports.checkId = (req, res, next, val) => {
//   console.log(val);
//   if (val * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       messgae: 'Invalid Id through middleware',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price || !req.body.rating) {
//     return res.status(400).json({
//       status: 'failed ',
//       message: 'Missing name , rating and price',
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'done',
      data: {
        newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }

  //   console.log(req.body);
  // const newId = tours[tours.length - 1].id + 1;
  // console.log(newId);
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   './dev-data/data/tours-simple.json',
  //   JSON.stringify(tours),
  //   'utf-8',
  //   (err) => {
  //     res.status(201).json({
  //       status: 'Done',
  //       data: {
  //         newTour,
  //       },
  //     });
  //   }
  // );
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: 'Success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
  // let id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(201).json({
  //   status: 'Success',
  //   data: {
  //     message: '<>Update Tour Here Done</>',
  //   },
  // });
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
  // let id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(204).json({
  //   status: 'Success',
  //   data: null,
  // });
};
