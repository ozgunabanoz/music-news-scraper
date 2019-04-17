const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./database/mongoose');
require('./models/news');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.use(bodyParser.json());
require('./routes/getNews')(app);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
