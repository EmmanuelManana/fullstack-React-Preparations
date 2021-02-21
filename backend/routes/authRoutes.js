const passport = require("passport");
const express = require('express');
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {}
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res
    .status(200)
    .send({ redirected: "user has been redirected, back to our side" });
});


module.exports = router;
