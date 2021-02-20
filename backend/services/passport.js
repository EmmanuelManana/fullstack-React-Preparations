const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

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
        console.log("prpofile: ", profile);
        console.log("done: ", done);
  
      }
    )
  );