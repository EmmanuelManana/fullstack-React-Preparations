const passport = require("passport");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

router.get(
  "/login",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {}
);

router.get("/login/callback", passport.authenticate("google"), (req, res) => {
  // res.status(200).send({ redirected: "user logged in" });
  res.redirect(`${keys.CLIENT_URL}/dashboard`);
});

// reset the session cookie.
router.use("/api/logout", (req, res) => {
  req.logout();
  // res.status(200).send({ loggedout: "user loggeout"});
  res.redirect(`${keys.CLIENT_URL}/`);
});

// get the current user, in this session
router.get("/api/user", (req, res) => {
  // res.send(req.session);
  res.status(200).send(req.user);
});

router.get("/api/stripe", (req, res) => {

  res.status(201).send({})
})

module.exports = router;
