const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;
// console.developers.google.com, google+ -> OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// MiddleWare
app.use(express.json());

//  routes
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {}
);

app.get('/auth/google/callback', (req, res) => {
    res.status(200).send({ redirected : "user has been redirected, back to our side"})
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
