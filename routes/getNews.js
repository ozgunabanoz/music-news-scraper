const _ = require('lodash');

const { scrapeNews } = require('../scraper/scraper');
let { News } = require('./../models/news');

module.exports = app => {
    app.get('/', async (req, res) => {
        try {
            let content = await scrapeNews();

            _.map(content, async element => {
                let news = { article: element };
                let Item = new News(news);

                await Item.save();
            });

            res.send(content);
        } catch (e) {}
    });
};
