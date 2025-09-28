const scrapeWebsite = require('../utils/scraper');
const ScrapedData = require('../models/ScrapedData');

exports.scrapeWebsite = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const data = await scrapeWebsite(url);
    const scrapedData = new ScrapedData({ url, data });
    await scrapedData.save();
    res.json({ message: 'Scraped data saved successfully', data });
  } catch (error) {
    console.error('Error scraping website:', error);
    res.status(500).json({ error: 'Failed to scrape website' });
  }
};