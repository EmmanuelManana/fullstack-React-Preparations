const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

// pull the schema out of mongoose
const mongoose = require('mongoose');
const User = require('../models/User');


const user =  new User({ googleId : "1432334"})

// console.developers.google.com, google+ -> OAuth
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
  
        console.log("accesstoken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        console.log("profile: ", profile.id);
        console.log("done: ", done);
  
      }
    )
  );