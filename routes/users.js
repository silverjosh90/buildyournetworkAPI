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

apiRouter.route('/:linkedinID')
  .get(function(req,res){
    Users.find({linkedinID: req.params.linkedinID}).then(function(results){
      res.json(results)
    })
  })
  .put(function(req,res){
    Users.update({linkedinID: req.params.linkedinID}, {
      name: 'Norman Chaco',
      linkedinID: "18866663032",
      email: "silverjosh@hotmail.com",
      prof_pic: "www.xoxo6969.com",
      contacts: []
     }).then(function(results){
      res.json('Successfully updated!')
    })
  })
  .delete(function(req,res){
    Users.remove({linkedinID: req.params.linkedinID}).then(function(results){
      res.json('User Deleted')
    })
  })






module.exports = apiRouter;
