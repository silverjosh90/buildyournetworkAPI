var express = require('express');
var apiRouter = express.Router();
var Users = require('../data/users')

/* GET home page. */


apiRouter.route('/')
  .get(function(req,res){

    Users.find({}).then(function(results){
      res.json(results)
    })

  })
  // .post(function(req,res){
  //   Users.find({linkedinID: req.body.linkedinID}).then(function(results){
  //     user = results[0]
  //     user.contacts.push(req.body)
  //     res.send('Contact Added!')
  //   })
  // })
//   .put(function(req,res){
//
//
//   })
//   .delete(function(req,res){
//     Users.find({linkedinID: req.body.linkedinID}).then(function(results){
//       for (var i = 0; i < results.length; i++) {
//         var contact = results[i]
//       }
//   })
//
//
// })


apiRouter.route('/create')
  .post(function(req,res){
    console.log("hello");
    var newContact = {
      firstname: 'Hilary',
      lastname: 'potato',
      met: 'Doing Human Things'
    }
Users.update({_id: '56e30bb0c071c1aeed121cf9'}, {$push: {contacts: {firstname: 'hilary', lastname: "silverstein"}}}).then(function(results){


  // results.contacts.push(newContact)
  res.send(results)

})
})

// Adds Skill to id
var Skills = 'req.body.skill'
var indSkills = Skills.split(',')

// db.users.update({"_id" : ObjectId("56e30bb0c071c1aeed121cf9"), 'contacts':{$elemMatch : {'_id':  ObjectId("56e7495579bdb4b44e5b52cb")}}}, {$push : { 'contacts.$.skills': 'React'}}

Users.update({linkedinID: 3333, 'contacts': {$elemMatch: {'_id' : "56e7495579bdb4b44e5b52cb"}}}, {$push : {'contacts.$.skills' : indSkills}})

// Adds





// apiRouter.route('/create/inarray')
//   .post(function(req,res){
//
//     Users.update({'_id': '56e31050b822abe5eef53f64'}, { contacts: {$elemMatch : { _id: '56e70da114716e723977e1a2' }}}).then(function(results){
//       console.log("derp");
//       res.send(results)
//     })
//   })

module.exports = apiRouter;
