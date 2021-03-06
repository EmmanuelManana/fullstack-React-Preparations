const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

// pull the schema out of mongoose
const mongoose = require("mongoose");
const User = mongoose.model("users");

//serialize and deserialize user, cokkies
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// user.id /id will be unique identifier in SQl, or primary k
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

// console.developers.google.com, google+ -> Ouuth
// passport middleware, hooked to google Oauth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });

      try {
        if (user) {
          console.log("user exist");
          done(null, user);
        } else {
          const newUser = await new User({ googleId: profile.id }).save();
          done(null, newUser);
        }
      } catch (e) {
        // must uselogging
        console.log("Loggin Exception: ", e)
      }
    }
  )
);
