var express = require('express');
var apiRouter = express.Router();
var Users = require('../data/users')

/* GET users listing. */

apiRouter.route('/')
  .get(function(req,res){
    Users.find({}).then(function(results){
      res.json(results)
    })
  })
  .post(function(req,res){
    Users.create({
      name: "Josh Silverstein",
      linkedinID: "18866663032",
      email: "silverjosh@hotmail.com",
      prof_pic: "www.xoxo6969.com",
      contacts: []
    }).then(function(results){
      res.json('Successfully Added!')
    })
  })


  // var users =  new db.Schema({
  //   name: String,
  //   linkedinID: Number,
  //   email: String,
  //   prof_pic: String,
  //   contacts: [{
  //     seq: 0,
  //     firstname: String,
  //     lastname: String,
  //     email: String,
  //     Phone: String,
  //     met: String,
  //     met_via: String,
  //     occupation: String,
  //     skills: [String],
  //     portfolio: String,
  //     linkedin: String,
  //     availability: String,
  //     notes: String,
  //   }]
  //
  // })





module.exports = apiRouter;
