let { News } = require('./../models/news');

const newsToDB = newsArray => {
    newsArray.reverse();

    newsArray.forEach(async newsElement => {
        try {
            let newsDBElement = new News(newsElement);

            await newsDBElement.save();
        } catch (e) {
            console.log('Duplicate item');
        }
    });
};

module.exports = { newsToDB };
