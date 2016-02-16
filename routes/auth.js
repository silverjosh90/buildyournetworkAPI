var express = require('express');
var router = express.Router();
var passport = require('passport')
var passportconfig = require('../config/passport')

router.get('/linkedin',
  passport.authenticate('linkedin'));

router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.user)
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;
