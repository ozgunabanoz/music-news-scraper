require('./config/config');
const express = require('express');
const { mongoose } = require('./database/mongoose');

const app = express();

let {
  newsFeedCallOperator
} = require('./newsFeedCallOperator/newsFeedCallOperator');
require('./models/news');

newsFeedCallOperator(); // first function call independent of setinterval
setInterval(() => newsFeedCallOperator(), 6 * 60 * 60 * 1000); // calling the function every 6 hours

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
});
