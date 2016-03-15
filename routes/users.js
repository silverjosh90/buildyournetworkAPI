var express = require('express');
var apiRouter = express.Router();

/* GET users listing. */

apiRouter.route('/')
  .get(function(req,res){
    console.log("Hello");
  })

module.exports = apiRouter;
