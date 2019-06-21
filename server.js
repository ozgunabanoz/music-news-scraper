require('./config/config');
const express = require('express');
const { mongoose } = require('./database/mongoose');
const bodyParser = require('body-parser');

const app = express();

let {
    newsFeedCallOperator
} = require('./newsFeedCallOperator/newsFeedCallOperator');
require('./models/news');

app.use(bodyParser.json());

require('./routes/apiRoutes')(app);

newsFeedCallOperator(); // first function call independent of setinterval
setInterval(() => newsFeedCallOperator(), 20 * 60 * 1000); // calling the function every 20 minutes

app.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
});
