const express = require('express');
const router = express.Router();

// Example usage route
router.get('/', (req, res) => {
  res.json({ message: 'Usage details will be here.' });
});

module.exports = router;
