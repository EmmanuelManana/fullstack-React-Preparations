const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

// pull the schema out of mongoose
const mongoose = require("mongoose");
const User = mongoose.model("users");

// console.developers.google.com, google+ -> OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save(error => {
        console.log("save error => ", error);
      });
    }
  )
);
