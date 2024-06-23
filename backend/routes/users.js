const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.redirect(`/dashboard?token=${token}`);
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});

module.exports = router;
