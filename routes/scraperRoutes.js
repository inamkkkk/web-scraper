const express = require('express');
const scraperController = require('../controllers/scraperController');
const router = express.Router();

router.post('/scrape', scraperController.scrapeWebsite);

module.exports = router;