const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
// console.log(process.env.NODE_ENV);

const PORT_NO = process.env.PORT_NO || 9000;
app.listen(PORT_NO, () => {
  console.log('My server statred', PORT_NO);
});
