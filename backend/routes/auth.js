const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: true }),
  (req, res) => {
    res.redirect('http://localhost:3000/');
  }
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000/');
  });
});

router.get('/user', (req, res) => {
  res.json(req.user);
});

module.exports = router;
