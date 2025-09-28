const express = require('express');
const mongoose = require('mongoose');
const scraperRoutes = require('./routes/scraperRoutes');
const config = require('./utils/config');

const app = express();
const port = config.port || 3000;

app.use(express.json());

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/scraper', scraperRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});