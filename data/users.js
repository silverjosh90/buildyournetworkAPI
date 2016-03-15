
var db = require('./mongoose')
var users =  new db.Schema({
  name: String,
  linkedinID: Number,
  email: String,
  prof_pic: String,
  contacts: [{
    seq: 0,
    firstname: String,
    lastname: String,
    email: String,
    Phone: String,
    met: String,
    met_via: String,
    occupation: String,
    skills: [String],
    portfolio: String,
    linkedin: String,
    availability: String,
    notes: String,
  }]

})

module.exports = db.model('Users', users)
