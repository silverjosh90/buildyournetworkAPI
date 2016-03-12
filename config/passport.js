var LinkedInStrategy = require('passport-linkedin').Strategy
var passport = require('passport')
var db = require('../data/mongoose.js')


passport.use(new LinkedInStrategy({
    consumerKey: process.env.CLIENT_ID,
    consumerSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    profileFields: ['id', 'first-name','picture-url', 'last-name', 'email-address', 'headline']
  },
  function(token, tokenSecret, profile, done) {
    console.log(profile);
    // User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));

passport.serializeUser(function(user, done) {
 // later this will be where you selectively send to the browser an identifier for your user,
 // like their primary key from the database, or their ID from linkedin
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  //here is where you will go to the database and get the user each time from it's id, after you set up your db
  done(null, user)
});
