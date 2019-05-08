const mongoose = require('mongoose');

let newsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        unique: true // to avoid duplicates
    },
    headline: {
        type: String,
        minlength: 1
    },
    articleText: {
        type: String,
        minlength: 1
    }
});

let News = mongoose.model('news', newsSchema);

module.exports = { News };
