var db = require('mongoose');
require('dotenv').load();


var url = process.env.MONGOLAB_URI || 'mongodb://localhost/buildyournetwork'
db.connect(url)

// var development = 'mongodb://localhost/buildyournetwork'
// var production = process.env.MONGOLAB_URI
//
// if (development) {
//   mongoose.connect(development)
// }
//
// else {
//   mongoose.connect(production)
// }

module.exports = db;
