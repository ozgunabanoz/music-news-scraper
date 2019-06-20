require('./config/config');
const { mongoose } = require('./database/mongoose');

let {
    newsFeedCallOperator
} = require('./newsFeedCallOperator/newsFeedCallOperator');
require('./models/news');

newsFeedCallOperator(); // first function call independent of setinterval
setInterval(() => newsFeedCallOperator(), 2 * 60 * 60 * 1000); // calling the function every 2 hour
