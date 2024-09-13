const express = require('express');
const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(req.params);
    console.log('Hello from development Authentication MiddleWare');
    next();
  });
}
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    console.log(req.params);
    console.log('Hello from production Authentication MiddleWare');
    next();
  });
}

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

// const TourRouter = express.Router();
// const userRouter = express.Router();
app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users/', userRouter);

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
