const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.params);
  console.log('Hello from Authentication MiddleWare');
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/data/tours-simple.json`, 'utf-8')
);
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messgae: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  //   console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  console.log(newId);
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    'utf-8',
    (err) => {
      res.status(201).json({
        status: 'Done',
        data: {
          newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  let id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messgae: 'Invalid Id',
    });
  }
  res.status(201).json({
    status: 'Success',
    data: {
      message: '<>Update Tour Here Done</>',
    },
  });
};
const deleteTour = (req, res) => {
  let id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messgae: 'Invalid Id',
    });
  }
  res.status(204).json({
    status: 'Success',
    data: null,
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'TYhis route is not yet Created',
  });
};
// For all data of Tours
// app.get('/api/v1/tours', getAllTours);

// For a specific data
// app.get('/api/v1/tours/:id', getTour);

// // Create Tours
// // app.post('/api/v1/tours/', createTour);
// // /To Update Tours
// app.patch('/api/v1/tours/:id', updateTour);

// app.delete('/api/v1/tours/:id', deleteTour);

// app.get('/api/v1/users/', getUser);

// app.post('/api/v1/users/', createUser);

// app.patch('/api/v1/users/:id', updateUser);

// app.delete('/api/v1/users/:id', deleteUser);

const TourRouter = express.Router();
const userRouter = express.Router();
app.use('/api/v1/tours', TourRouter);
TourRouter.route('/').get(getAllTours).post(createTour);
TourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

app.use('/api/v1/users/', userRouter);
userRouter.route('/').get(getUser).post(createUser);
userRouter.route('/:id').patch(updateUser).delete(deleteUser);

// const PORT_NO = 9000;
// app.listen(PORT_NO, () => {
//   console.log('My server statred', PORT_NO);
// });

module.exports = app;

// /getToursdata
// /createTourData
// /updateTourData
// /deleteTourData

// get,post,patch,delete-/api/v1/tours
