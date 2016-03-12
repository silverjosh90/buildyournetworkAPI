var db = require('mongoose');
db.connect('mongodb://localhost/buildyournetwork');

module.exports = db
