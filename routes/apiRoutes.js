let { News } = require('./../models/news');

module.exports = app => {
    app.get('/', async (req, res) => {
        try {
            let news = await News.find({}).sort({ _id: -1 });

            res.send(news).status(200);
        } catch (e) {
            console.log(e);
        }
    });
};
