const cheerio = require('cheerio');

const scrape = html => {
    let $ = cheerio.load(html);
    let content = [];

    return new Promise((resolve, reject) => {
        $('.contents').each(function() {
            let p = $('p', this).text();
            content.push(p);
        });
        resolve(content);
    });
};

module.exports = { scrape };
