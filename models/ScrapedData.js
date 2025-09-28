const mongoose = require('mongoose');

const scrapedDataSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScrapedData', scrapedDataSchema);