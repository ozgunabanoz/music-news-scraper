const Parser = require('rss-parser');
const puppeteer = require('puppeteer');

let parser = new Parser();
let { scrapeCaller } = require('./../scrapeCaller/scrapeCaller');
let { newsToDB } = require('./../newsToDB/newsToDB');

const newsFeedCallOperator = async () => {
    try {
        let feed = await parser.parseURL('https://pitchfork.com/rss/news/');
        let articleArray = [];

        for (let i = 0; i < 20; i++) {
            // iterating through first 20 items of rss feed
            let browser = await puppeteer.launch();
            let articleObject = {};
            let article = await scrapeCaller(browser, feed.items[i]);

            articleObject['title'] = feed.items[i].title;
            articleObject['headline'] = feed.items[i].content;
            articleObject['articleText'] = article;
            articleArray.push(articleObject);
            await browser.close(); // close the browser after finish because of performance issues
        }

        newsToDB(articleArray); // to add news to database
    } catch (e) {
        console.log(e);
    }
};

module.exports = { newsFeedCallOperator };
