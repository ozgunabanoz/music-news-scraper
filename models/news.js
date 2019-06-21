const mongoose = require('mongoose');
const _ = require('lodash');

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

newsSchema.methods.toJSON = function() {
    let news = this;
    let newsObject = news.toObject();

    return _.pick(newsObject, ['title', 'headline', 'articleText']);
};

let News = mongoose.model('news', newsSchema);

module.exports = { News };
