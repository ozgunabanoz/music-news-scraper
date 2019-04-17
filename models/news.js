const mongoose = require('mongoose');

let newsSchema = new mongoose.Schema({
    article: {
        type: String,
        minlength: 1
    }
});

let News = mongoose.model('news', newsSchema);

module.exports = { News };
