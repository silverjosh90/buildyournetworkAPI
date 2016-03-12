var express = require('express');
var apiRouter = express.Router();
var Users = require('../data/users')

/* GET home page. */


apiRouter.route('/')
  .get(function(req,res){

    Users.find({name: req.body.linkedinID}).then(function(results){
      res.json(results)
    })

  })
  .post(function(req,res){
    Users.find({linkedinID: req.body.linkedinID}).then(function(results){
      user = results[0]
      user.contacts.push(req.body)
      res.send('Contact Added!')
    })
  })
  .put(function(req,res){


  })
  .delete(function(req,res){
    Users.find({_id: '56e30f5bbe64c386ee57aba8'}).remove().exec()
    res.json('user deleted!')
  })




// router.get('/', function(req, res, next) {
//   console.log(req.user);
//   res.render('index', { title: 'Express' });
// });
// router.post('/create', function(req,res,next){
//
// Users.find({linkedinID: req.body.linkedinID}).then(function(results){
//
//
//   var newContact = {
//     firstname: req.body.firstname,
//     lastname: 'tacoLover',
//     met: 'On Slack'
//   }
  //
  // results.contacts.push(newContact)
  //
  // jeremiah.contacts.push(newContact)
  // console.log(jeremiah);
//   res.send(results)
//
// })
// })


module.exports = apiRouter;
