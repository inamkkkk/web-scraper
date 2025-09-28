const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const scrapedData = {
      title: $('title').text(),
      paragraphs: $('p').map((i, el) => $(el).text()).get(),
      links: $('a').map((i, el) => $(el).attr('href')).get()
    };

    return scrapedData;
  } catch (error) {
    console.error('Error scraping website:', error);
    throw error;
  }
}

module.exports = scrapeWebsite;