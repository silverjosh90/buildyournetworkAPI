var express = require('express');
var router = express.Router();
var passport = require('passport')
var passportconfig = require('../config/passport')
var db = require('../data/mongoose')

router.get('/linkedin',
  passport.authenticate('linkedin'));

router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.user)
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/logout', function(req,res,next){
  req.session = null
  res.redirect('/')
})

module.exports = router;
