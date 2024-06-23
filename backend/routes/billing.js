const express = require('express');
const router = express.Router();

// Example billing route
router.get('/', (req, res) => {
  res.json({ message: 'Billing information will be here.' });
});

module.exports = router;
