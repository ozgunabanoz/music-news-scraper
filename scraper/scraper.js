const puppeteer = require('puppeteer');
const $ = require('cheerio');
const baseUrl = 'https://pitchfork.com/news?page=';

const scrapeNews = async () => {
    try {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
        let titles = [];

        for (let i = 1; i < 11; i++) {
            await page.goto(baseUrl + `${i}`);

            let html = await page.content();
            $('h2.title', html).each(function() {
                titles.push(
                    $(this)
                        .contents()
                        .text()
                );
            });
        }

        return titles;
    } catch (e) {}
};

module.exports = { scrapeNews };
