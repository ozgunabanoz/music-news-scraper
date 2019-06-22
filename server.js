require('./config/config');
const { mongoose } = require('./database/mongoose');

let {
    newsFeedCallOperator
} = require('./newsFeedCallOperator/newsFeedCallOperator');
require('./models/news');

newsFeedCallOperator(); // first function call independent of setinterval
setInterval(() => newsFeedCallOperator(), 20 * 60 * 1000); // calling the function every 20 minutes
