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

    var newContact = {
      firstname: 'Hilary',
      lastname: 'potato',
      met: 'Doing Human Things'
    }
Users.update({linkedinID: 18866663032}, {$push: {contacts: {firstname: 'hilary', lastname: "silverstein"}}}).then(function(results){


  // results.contacts.push(newContact)
  res.send(results)

})
})

// Adds Skill to id

// db.users.update({"_id" : ObjectId("56e30bb0c071c1aeed121cf9"), 'contacts':{$elemMatch : {'_id':  ObjectId("56e7495579bdb4b44e5b52cb")}}}, {$push : { 'contacts.$.skills': 'React'}}
apiRouter.route('/create/skills')
  .put(function(req,res){
Users.update({linkedinID: 18866663032, 'contacts': {$elemMatch: {'_id' : "56ec74c9d920ef1c07974bb7"}}}, {$pushAll : {'contacts.$.skills' : 'postgresSQL'}}).then(function(results){
    res.json('Skills Updated!')
  })
})
  .delete(function(req,res){
    Users.remove({linkedinID: 18866663032, contacts: {$elemMatch:{_id: '56ec4437a1e296fb05a417a1'}}}).then(function(results){
      res.json('contact removed!')
    })
  })

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
