var express = require('express');
var router = express.Router();
var db = require('../data/mongoose')

router.get('/', function(req,res){
  res.send('whats cookin good lookin')
})

module.exports = router;
