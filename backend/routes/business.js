const express = require('express');
const router = express.Router();
const { getRandomHeadline } = require('../utils/headlines');

router.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  res.json({
    rating: 4.3,
    reviews: 127,
    headline: getRandomHeadline(name, location),
  });
});

router.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  res.json({
    headline: getRandomHeadline(name, location),
  });
});

module.exports = router;
