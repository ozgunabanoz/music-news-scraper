const { mongoose } = require('./database/mongoose');
let Parser = require('rss-parser');
let parser = new Parser();
const puppeteer = require('puppeteer');
// require('events').EventEmitter.defaultMaxListeners = 30;

let { scrape } = require('./newsScraper/newsScraper');
require('./models/news');

(async () => {
    try {
        let feed = await parser.parseURL('https://pitchfork.com/rss/news/');
        let browser = await puppeteer.launch();

        for (let i = 0; i < 2; i++) {
            browser
                .newPage()
                .then(page => {
                    page.goto(feed.items[i].link, {
                        timeout: 120000,
                        waitUntil: 'networkidle0'
                    })
                        .then(() => {
                            return page.content();
                        })
                        .then(html => {
                            return scrape(html);
                        })
                        .then(content => {
                            console.log(content);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    } catch (e) {
        console.log(e);
    }
})();
