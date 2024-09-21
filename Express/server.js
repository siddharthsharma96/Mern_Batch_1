const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
// console.log(process.env.NODE_ENV);np
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT_NO = process.env.PORT_NO || 9000;
app.listen(PORT_NO, () => {
  console.log('My server statred', PORT_NO);
});

// Collections means tables
// ?Document means rows
