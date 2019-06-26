let { scrape } = require('./../newsScraper/newsScraper');

const scrapeCaller = (browser, item) => {
    // calling scrape function, and sending its data by way of promise (because it's async)
    return new Promise((resolve, reject) => {
        browser
            .newPage()
            .then(page => {
                page.goto(item.link, {
                    timeout: 600000, // if you don't increase timeout length, you can get exceedtime warnings
                    waitUntil: 'networkidle0'
                })
                    .then(() => {
                        return page.content();
                    })
                    .then(html => {
                        return scrape(html);
                    })
                    .then(content => {
                        resolve(content[0]);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            })
            .catch(e => {
                console.log(e);
            });
    });
};

module.exports = { scrapeCaller };
